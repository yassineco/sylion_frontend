# Export Replit → Environnement local (SYLION TECH)

> Guide complet pour exporter le site marketing SYLION TECH depuis Replit vers un environnement de développement local, puis préparer un futur déploiement VPS.

---

## 1. Pré-requis sur la machine locale

### Logiciels requis

| Logiciel | Version recommandée | Vérification |
|----------|---------------------|--------------|
| **Node.js** | v20.x ou supérieur | `node --version` |
| **npm** | v10.x ou supérieur (inclus avec Node) | `npm --version` |
| **Git** | v2.40+ | `git --version` |
| **VS Code** | Dernière version stable | - |

### Installation Node.js (si nécessaire)

```bash
# macOS (avec Homebrew)
brew install node@20

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Télécharger depuis https://nodejs.org/
```

### Checklist pré-requis

- [ ] Node.js v20+ installé
- [ ] npm v10+ disponible
- [ ] Git installé et configuré (email + nom)
- [ ] VS Code installé avec extensions recommandées (ES7+, Tailwind CSS IntelliSense, Prettier)

---

## 2. Nettoyage avant export sur Replit

### 2.1 Vérifier qu'aucun secret n'est dans le code

Les secrets ne doivent **jamais** être committés. Vérifiez qu'aucune clé API ou valeur sensible n'apparaît en dur dans le code :

```bash
# Rechercher des patterns suspects dans le code
grep -r "sk_live\|sk_test\|apiKey\|API_KEY\|SECRET" --include="*.ts" --include="*.tsx" .
```

### 2.2 Variables d'environnement du projet

Le projet utilise les variables d'environnement suivantes :

| Variable | Description | Requis en local |
|----------|-------------|-----------------|
| `VITE_GA_MEASUREMENT_ID` | ID Google Analytics 4 (ex: G-XXXXXXXXXX) | Optionnel (dev) |
| `SESSION_SECRET` | Clé secrète pour les sessions Express | Oui |
| `DATABASE_URL` | URL PostgreSQL (si base de données utilisée) | Optionnel |

### 2.3 Créer le fichier `.env.example`

Créez un fichier `.env.example` à la racine du projet (sera commité) :

```bash
# .env.example - Template des variables d'environnement
# Copier ce fichier en .env.local et remplir les valeurs

# Google Analytics 4 (optionnel en dev)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Session Express
SESSION_SECRET=votre_secret_aleatoire_ici

# Base de données PostgreSQL (optionnel pour le site marketing)
# DATABASE_URL=postgresql://user:password@host:5432/database
```

### 2.4 Vérifier le fichier `.gitignore`

Assurez-vous que `.gitignore` contient :

```gitignore
# Environnement
.env
.env.local
.env.production

# Dépendances
node_modules/

# Build
dist/

# Logs
*.log

# IDE
.idea/
.vscode/settings.json

# OS
.DS_Store
Thumbs.db

# Replit specifique (à supprimer en local)
.replit
replit.nix
.cache/
```

### 2.5 Vérifier les scripts package.json

Les scripts disponibles dans ce projet :

```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc"
  }
}
```

### Checklist nettoyage

- [ ] Aucun secret en dur dans le code
- [ ] Fichier `.env.example` créé
- [ ] `.gitignore` vérifié et complet
- [ ] Scripts package.json fonctionnels

---

## 3. Méthode recommandée : Export via Git

### 3.1 Si le Repl n'est PAS connecté à GitHub

#### Étape 1 : Créer un repository GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. Nom du repo : `sylion-marketing-site`
3. Visibilité : **Private** (recommandé)
4. Ne PAS initialiser avec README (le projet existe déjà)
5. Cliquer "Create repository"

#### Étape 2 : Connecter Replit à GitHub

Dans Replit, ouvrir le panneau **Git** (icône branche à gauche) puis :

```bash
# Initialiser Git si nécessaire
git init

# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/sylion-marketing-site.git

# Vérifier la connexion
git remote -v
```

#### Étape 3 : Premier commit propre

```bash
# Voir l'état actuel
git status

# Ajouter tous les fichiers
git add .

# Commit avec message descriptif
git commit -m "chore: export from replit (version landing SYLION v1.0)"

# Pousser vers GitHub
git push -u origin main
```

### 3.2 Si Git est DÉJÀ configuré

```bash
# Vérifier l'état
git status

# Ajouter les modifications
git add .

# Commiter
git commit -m "chore: final export from replit"

# Pousser
git push origin main
```

### 3.3 Cloner le projet en local

Sur votre machine locale, ouvrez un terminal :

```bash
# Cloner le repository
git clone https://github.com/VOTRE_USERNAME/sylion-marketing-site.git

# Entrer dans le dossier
cd sylion-marketing-site

# Installer les dépendances
npm install

# Créer le fichier d'environnement local
cp .env.example .env.local

# Éditer les variables (avec VS Code ou nano)
code .env.local
```

Remplir `.env.local` :

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
SESSION_SECRET=une_chaine_aleatoire_de_32_caracteres_minimum
```

Puis lancer le serveur de développement :

```bash
npm run dev
```

### Checklist export Git

- [ ] Repository GitHub créé
- [ ] Remote origin configuré
- [ ] Premier commit effectué
- [ ] Push réussi
- [ ] Clone local fonctionnel
- [ ] `npm install` sans erreur
- [ ] `.env.local` créé et rempli

---

## 4. Méthode alternative : Export via ZIP

> Utilisez cette méthode uniquement si Git n'est pas une option.

### 4.1 Télécharger le ZIP depuis Replit

1. Dans Replit, cliquer sur les **trois points** (⋮) en haut à gauche du panneau fichiers
2. Sélectionner **"Download as zip"**
3. Attendre le téléchargement (peut prendre quelques secondes)

### 4.2 Extraire et configurer en local

```bash
# Dézipper (remplacer par le nom réel du fichier)
unzip ~/Downloads/sylion-marketing-site.zip -d ~/projets/

# Entrer dans le dossier
cd ~/projets/sylion-marketing-site

# Supprimer les fichiers spécifiques Replit
rm -f .replit replit.nix
rm -rf .cache .upm

# Initialiser Git
git init
git add .
git commit -m "chore: initial import from replit zip"

# Installer les dépendances
npm install

# Créer le fichier d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# Lancer le projet
npm run dev
```

### Checklist export ZIP

- [ ] ZIP téléchargé
- [ ] Fichiers extraits
- [ ] Fichiers Replit supprimés (.replit, replit.nix)
- [ ] Git initialisé
- [ ] Dépendances installées
- [ ] `.env.local` configuré

---

## 5. Vérifier que le projet tourne bien en local

### 5.1 Lancer le serveur de développement

```bash
npm run dev
```

Le serveur démarre et affiche :

```
Server running on port 5000
```

### 5.2 Ouvrir dans le navigateur

Ouvrir : **http://localhost:5000**

> **Note** : Ce projet utilise un serveur Express qui sert à la fois l'API et le frontend Vite. Le port par défaut est **5000** (configuré dans `server/index.ts`).

### 5.3 Checklist de validation

#### Navigation

- [ ] Page d'accueil `/` s'affiche correctement
- [ ] Page `/pricing` affiche les 3 plans + Pack Activation
- [ ] Page `/products` affiche les produits
- [ ] Page `/services` affiche les services
- [ ] Page `/enterprise` s'affiche
- [ ] Page `/contact` affiche le formulaire
- [ ] Page `/assistant-whatsapp-maroc` s'affiche
- [ ] Page `/whatsapp-business-api-maroc` s'affiche
- [ ] Page `/architecture-securite` s'affiche
- [ ] Page `/integration-crm-workflows` s'affiche

#### Fonctionnalités

- [ ] Menu hamburger mobile fonctionne (redimensionner la fenêtre < 768px)
- [ ] Liens de navigation fonctionnent
- [ ] Animations de scroll fonctionnent
- [ ] Thème dark appliqué correctement

#### Console navigateur

- [ ] Aucune erreur JavaScript rouge dans la console (F12)
- [ ] Aucune erreur 404 sur des fichiers
- [ ] Warnings acceptables (non bloquants)

### 5.4 En cas de problème

| Problème | Solution |
|----------|----------|
| `npm install` échoue | Supprimer `node_modules` et `package-lock.json`, réessayer |
| Port 5000 déjà utilisé | Modifier le port dans `server/index.ts` ou tuer le process |
| Erreur TypeScript | Lancer `npm run check` pour voir les détails |
| Page blanche | Vérifier la console navigateur (F12) |

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Vérifier le typage
npm run check
```

---

## 6. Préparer le projet pour déploiement VPS (aperçu rapide)

> Cette section donne un aperçu. Un guide détaillé sera disponible dans `docs/DEPLOY_VPS_GUIDE.md`.

### 6.1 Créer un build de production

```bash
npm run build
```

Cette commande :
1. Compile le frontend React avec Vite → `dist/client/`
2. Bundle le serveur Express avec esbuild → `dist/index.js`

### 6.2 Tester le build en local

```bash
# Définir les variables d'environnement de production
export NODE_ENV=production
export SESSION_SECRET="votre_secret_production"

# Lancer le serveur de production
npm run start
```

Ouvrir http://localhost:5000 et vérifier que tout fonctionne.

### 6.3 Structure du build

```
dist/
├── index.js          # Serveur Express bundlé
└── client/           # Assets frontend Vite
    ├── index.html
    └── assets/
        ├── index-xxx.js
        └── index-xxx.css
```

### 6.4 Options de déploiement VPS

| Option | Description | Complexité |
|--------|-------------|------------|
| **Node.js + PM2** | Lancer `dist/index.js` avec PM2 | Simple |
| **Node.js + Nginx** | Nginx en reverse proxy devant Node | Moyen |
| **Docker** | Containeriser l'application | Avancé |

### 6.5 Commandes à retenir pour le VPS

```bash
# Cloner le repo sur le VPS
git clone https://github.com/VOTRE_USERNAME/sylion-marketing-site.git
cd sylion-marketing-site

# Installer les dépendances (production only)
npm ci --production

# Build
npm run build

# Lancer avec PM2
pm2 start dist/index.js --name sylion-marketing

# Configurer le démarrage automatique
pm2 startup
pm2 save
```

### 6.6 Variables d'environnement production

Sur le VPS, créer `/etc/environment` ou utiliser PM2 ecosystem :

```bash
NODE_ENV=production
SESSION_SECRET=secret_production_tres_long_et_aleatoire
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 7. Résumé des commandes

### Export rapide (Git)

```bash
# Sur Replit
git add . && git commit -m "chore: export" && git push

# En local
git clone <URL>
cd <projet>
npm install
cp .env.example .env.local
npm run dev
```

### Build production

```bash
npm run build
npm run start
```

---

## 8. Fichiers à conserver / supprimer

### À GARDER

- `client/` - Code source frontend React
- `server/` - Code source backend Express
- `shared/` - Types et schémas partagés
- `docs/` - Documentation
- `package.json` - Dépendances
- `tsconfig.json` - Configuration TypeScript
- `vite.config.ts` - Configuration Vite
- `tailwind.config.ts` - Configuration Tailwind
- `.env.example` - Template variables

### À SUPPRIMER (spécifique Replit)

- `.replit` - Configuration Replit
- `replit.nix` - Environnement Nix Replit
- `.cache/` - Cache Replit
- `.upm/` - Package manager Replit

---

## 9. Support et ressources

- **Documentation Vite** : https://vitejs.dev/
- **Documentation React** : https://react.dev/
- **Documentation Tailwind** : https://tailwindcss.com/
- **Guide PM2** : https://pm2.keymetrics.io/

---

> **Prochaine étape** : Une fois le projet fonctionnel en local, consulter `docs/DEPLOY_VPS_GUIDE.md` pour le déploiement production.
