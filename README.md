# SYLION TECH - Site Marketing Frontend

Site marketing officiel de **SYLION TECH**, une plateforme SaaS d'assistants IA WhatsApp pour les PME du marché marocain et francophone.

## 🏗️ Architecture

Ce repository contient **uniquement le frontend** du site marketing (vitrine).

> **Note :** Le backend de l'assistant WhatsApp IA (RAG, Workers, Queue, API) est hébergé dans un repository séparé.

## 🛠️ Stack technique

- **React 18** + TypeScript
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Styling avec design system custom
- **Framer Motion** - Animations
- **shadcn/ui** - Composants UI (Radix UI)
- **Wouter** - Routing client-side léger
- **TanStack Query** - Gestion d'état serveur

## 🚀 Démarrage rapide

### Prérequis

- Node.js >= 18
- npm >= 9

### Installation

```bash
cd client
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173)

### Build production

```bash
npm run build
```

Les fichiers statiques seront générés dans `client/dist/`.

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
syliontech_front/
├── client/                    # Application frontend Vite/React
│   ├── src/
│   │   ├── components/        # Composants React
│   │   │   ├── ui/            # Composants shadcn/ui
│   │   │   ├── animations/    # Composants d'animation
│   │   │   └── backgrounds/   # Effets de fond (LightRays, Grid, etc.)
│   │   ├── pages/             # Pages de l'application
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utilitaires
│   │   ├── App.tsx            # Composant racine
│   │   ├── main.tsx           # Point d'entrée
│   │   └── index.css          # Styles globaux + variables CSS
│   ├── public/                # Assets statiques
│   ├── index.html             # Template HTML
│   ├── package.json           # Dépendances frontend
│   ├── vite.config.ts         # Configuration Vite
│   ├── tailwind.config.ts     # Configuration Tailwind
│   └── tsconfig.json          # Configuration TypeScript
├── attached_assets/           # Assets annexes (docs, images source)
├── docs/                      # Documentation technique
├── design_guidelines.md       # Charte graphique SYLION
└── GUIDE_EDITORIAL_SYLION.md  # Ton éditorial et copywriting
```

## 🎨 Design System

Le site suit une charte graphique premium dark :

- **Palette** : Fond noir (#0B0B0B), texte blanc, gradients purple-to-blue pour les CTAs
- **Typographie** : Inter (texte), JetBrains Mono (code/technique)
- **Animations** : Motion-forward avec effets de fond (LightRays, GridPattern, FloatingOrbs)

Voir `design_guidelines.md` pour les détails complets.

## 🌐 Déploiement

Le dossier `client/dist/` généré par `npm run build` peut être déployé sur :

- **Netlify** - Glisser-déposer ou connexion Git
- **Vercel** - Import du repo
- **Nginx** - Servir les fichiers statiques
- **Cloudflare Pages** - Connexion Git

### Configuration Nginx exemple

```nginx
server {
    listen 80;
    server_name sylion.tech;
    root /var/www/syliontech/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement Vite |
| `npm run build` | Génère le build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie les erreurs TypeScript |

## 📄 License

MIT
