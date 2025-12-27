#!/usr/bin/env bash
# =============================================================================
# SYLION TECH - Production Deployment Script
# Deploys Vite static build to VPS via SCP/SSH
# Usage: ./deploy.sh [--force] [--skip-build] [--no-cleanup]
# =============================================================================
set -euo pipefail

# -----------------------------------------------------------------------------
# Configuration
# -----------------------------------------------------------------------------
VPS_USER="ubuntu"
VPS_HOST="151.80.233.240"
REMOTE_TMP="/tmp/sylionai_front"
REMOTE_ROOT="/var/www/sylionai"
LOCAL_DIST="./dist"
DOMAIN_WWW="www.sylionai.com"
DOMAIN_APEX="sylionai.com"

# Flags (defaults)
FLAG_FORCE=false
FLAG_SKIP_BUILD=false
FLAG_NO_CLEANUP=false

# -----------------------------------------------------------------------------
# Parse arguments
# -----------------------------------------------------------------------------
while [[ $# -gt 0 ]]; do
    case "$1" in
        --force)
            FLAG_FORCE=true
            shift
            ;;
        --skip-build)
            FLAG_SKIP_BUILD=true
            shift
            ;;
        --no-cleanup)
            FLAG_NO_CLEANUP=true
            shift
            ;;
        -h|--help)
            echo "Usage: ./deploy.sh [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --force       Deploy even if git working directory is dirty"
            echo "  --skip-build  Skip npm install and build (use existing dist/)"
            echo "  --no-cleanup  Keep /tmp/sylionai_front on VPS for debugging"
            echo "  -h, --help    Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1" >&2
            echo "Use --help for usage information." >&2
            exit 2
            ;;
    esac
done

# -----------------------------------------------------------------------------
# Logging functions
# -----------------------------------------------------------------------------
info()  { echo -e "\033[1;34m[INFO]\033[0m $*"; }
ok()    { echo -e "\033[1;32m[OK]\033[0m $*"; }
warn()  { echo -e "\033[1;33m[WARN]\033[0m $*"; }
error() { echo -e "\033[1;31m[ERROR]\033[0m $*" >&2; exit 1; }

# -----------------------------------------------------------------------------
# Pre-flight checks
# -----------------------------------------------------------------------------
info "Starting deployment to ${VPS_HOST}..."

# Ensure we're in the project root
if [[ ! -f "package.json" ]]; then
    error "Exit code 10: package.json not found. Run this script from the project root."
fi

if [[ ! -f "vite.config.ts" ]]; then
    error "Exit code 11: vite.config.ts not found. Are you in the correct directory?"
fi

# Check git status
if command -v git &> /dev/null && [[ -d ".git" ]]; then
    if ! git diff --quiet HEAD 2>/dev/null || [[ -n "$(git status --porcelain 2>/dev/null)" ]]; then
        if [[ "${FLAG_FORCE}" == "true" ]]; then
            warn "Git working directory is dirty. Proceeding anyway (--force)"
        else
            error "Exit code 20: Git working directory is dirty. Commit changes or use --force to override."
        fi
    else
        ok "Git working directory is clean"
    fi
fi

# -----------------------------------------------------------------------------
# Step 1: Build locally
# -----------------------------------------------------------------------------
if [[ "${FLAG_SKIP_BUILD}" == "true" ]]; then
    warn "Skipping build (--skip-build). Using existing dist/"
else
    info "Installing dependencies (if needed)..."
    if [[ ! -d "node_modules" ]]; then
        npm ci
    else
        info "node_modules exists, skipping npm ci"
    fi

    info "Building project..."
    npm run build
fi

# -----------------------------------------------------------------------------
# Step 2: Validate build output
# -----------------------------------------------------------------------------
DIST_REALPATH=$(realpath "${LOCAL_DIST}" 2>/dev/null || echo "${LOCAL_DIST}")
info "Build output directory: ${DIST_REALPATH}"

if [[ ! -d "${LOCAL_DIST}" ]]; then
    error "Exit code 30: dist directory not found at ${DIST_REALPATH}"
fi

if [[ ! -f "${LOCAL_DIST}/index.html" ]]; then
    error "Exit code 31: index.html not found at ${DIST_REALPATH}/index.html"
fi

FILE_COUNT=$(find "${LOCAL_DIST}" -type f | wc -l)
ok "Build validated: ${DIST_REALPATH}/index.html exists (${FILE_COUNT} files total)"

# -----------------------------------------------------------------------------
# Step 3: Upload to VPS
# -----------------------------------------------------------------------------
info "Preparing remote temp directory..."
ssh "${VPS_USER}@${VPS_HOST}" "rm -rf ${REMOTE_TMP} && mkdir -p ${REMOTE_TMP}"

info "Uploading dist contents to ${VPS_HOST}:${REMOTE_TMP}..."
scp -r ${LOCAL_DIST}/* "${VPS_USER}@${VPS_HOST}:${REMOTE_TMP}/"
ok "Upload complete"

# -----------------------------------------------------------------------------
# Step 4: Deploy on VPS
# -----------------------------------------------------------------------------
info "Deploying on VPS..."
ssh "${VPS_USER}@${VPS_HOST}" bash <<REMOTE_SCRIPT
set -euo pipefail

REMOTE_TMP="/tmp/sylionai_front"
REMOTE_ROOT="/var/www/sylionai"
NO_CLEANUP="${FLAG_NO_CLEANUP}"

echo "[VPS] Ensuring web root exists..."
sudo mkdir -p "\${REMOTE_ROOT}"

echo "[VPS] Replacing web root contents..."
sudo rm -rf "\${REMOTE_ROOT:?}"/*
sudo cp -r "\${REMOTE_TMP}"/* "\${REMOTE_ROOT}/"

echo "[VPS] Setting ownership to www-data..."
sudo chown -R www-data:www-data "\${REMOTE_ROOT}"

echo "[VPS] Setting permissions (dirs: 755, files: 644)..."
sudo find "\${REMOTE_ROOT}" -type d -exec chmod 755 {} \;
sudo find "\${REMOTE_ROOT}" -type f -exec chmod 644 {} \;

echo "[VPS] Testing Nginx configuration..."
sudo nginx -t

echo "[VPS] Reloading Nginx..."
sudo systemctl reload nginx

if [[ "\${NO_CLEANUP}" == "true" ]]; then
    echo "[VPS] Keeping temp directory for debugging: \${REMOTE_TMP}"
else
    echo "[VPS] Cleaning up temp directory..."
    rm -rf "\${REMOTE_TMP}"
fi

echo "[VPS] Deployment complete"
REMOTE_SCRIPT

ok "VPS deployment complete"

# -----------------------------------------------------------------------------
# Step 5: Remote verification
# -----------------------------------------------------------------------------
info "Verifying deployment..."

# Test www domain (should return 200)
WWW_STATUS=$(ssh "${VPS_USER}@${VPS_HOST}" "curl -s -o /dev/null -w '%{http_code}' -H 'Host: ${DOMAIN_WWW}' http://127.0.0.1/")
if [[ "${WWW_STATUS}" != "200" ]]; then
    error "Exit code 40: Verification failed: ${DOMAIN_WWW} returned ${WWW_STATUS} (expected 200)"
fi
ok "${DOMAIN_WWW} -> HTTP ${WWW_STATUS}"

# Test apex domain (should return 301)
APEX_STATUS=$(ssh "${VPS_USER}@${VPS_HOST}" "curl -s -o /dev/null -w '%{http_code}' -H 'Host: ${DOMAIN_APEX}' http://127.0.0.1/")
if [[ "${APEX_STATUS}" != "301" ]]; then
    error "Exit code 41: Verification failed: ${DOMAIN_APEX} returned ${APEX_STATUS} (expected 301)"
fi
ok "${DOMAIN_APEX} -> HTTP ${APEX_STATUS} (redirect to www)"

# -----------------------------------------------------------------------------
# Summary
# -----------------------------------------------------------------------------
echo ""
echo "============================================================================="
echo -e "\033[1;32m✓ DEPLOYMENT SUCCESSFUL\033[0m"
echo "============================================================================="
echo "  ${DOMAIN_WWW}  -> HTTP ${WWW_STATUS} (OK)"
echo "  ${DOMAIN_APEX} -> HTTP ${APEX_STATUS} (301 redirect)"
echo "  Web root: ${REMOTE_ROOT}"
echo "============================================================================="
