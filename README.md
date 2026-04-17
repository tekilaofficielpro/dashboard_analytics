This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

###########################################################################################################################################################################
# 📊 Dashboard Analytics - README

Ce projet est construit avec **Next.js (App Router)** et suit une architecture professionnelle pour garantir :

* Scalabilité 📈
* Maintenabilité 🛠️
* Travail en équipe efficace 🤝

---

# 🧱 Structure du projet + Explications

```bash
/app        → Gestion des pages et layouts (routing)
/components → Tous les composants UI
/hooks      → Logique réutilisable (React hooks)
/lib        → Fonctions utilitaires
/services   → Appels API
/store      → État global (Zustand)
/types      → Types TypeScript
/constants  → Données statiques
```

---

# 📁 /app

### ➤ Rôle

Gestion des **pages, routes et layouts** avec Next.js App Router.

### ➤ Contient

* Pages (dashboard, analytics, etc.)
* Layout global (Navbar, Sidebar)
* Pages auth (login, register)

### ➤ Pourquoi ?

* Structure claire des routes
* Séparation entre pages publiques et privées

---

# 📁 /components

### ➤ Rôle

Contient tous les composants React réutilisables.

---

## 🔹 /components/ui

### ➤ Rôle

Composants de base (design system).

### ➤ Exemples

* Button
* Input
* Card
* Modal

### ➤ Pourquoi ?

* Réutilisable partout
* Design cohérent

---

## 🔹 /components/charts

### ➤ Rôle

Graphiques du dashboard.

### ➤ Exemples

* LineChart
* BarChart
* PieChart

### ➤ Pourquoi ?

* Centraliser les graphiques
* Uniformiser les visualisations

---

## 🔹 /components/shared

### ➤ Rôle

Composants métier réutilisables.

### ➤ Exemples

* StatsCard
* ProjectCard
* DataTable
* Loader

### ➤ Pourquoi ?

* Réutiliser des blocs complets
* Éviter duplication

---

# 📁 /hooks

### ➤ Rôle

Custom hooks React pour gérer la logique.

### ➤ Exemples

* useAuth
* useProjects
* useAnalytics

### ➤ Pourquoi ?

* Séparer logique et UI
* Code plus propre et réutilisable

---

# 📁 /lib

### ➤ Rôle

Fonctions utilitaires et helpers techniques.

### ➤ Exemples

* formatDate()
* formatCurrency()
* helpers auth
* config API

### ➤ Pourquoi ?

* Éviter duplication
* Centraliser logique technique

---

# 📁 /services

### ➤ Rôle

Gestion des appels API.

### ➤ Exemples

* auth.service.ts
* project.service.ts
* analytics.service.ts

### ➤ Pourquoi ?

* Séparer UI et backend
* Code plus maintenable

---

# 📁 /store

### ➤ Rôle

Gestion de l’état global (Zustand).

### ➤ Exemples

* utilisateur connecté
* projets
* thème (dark/light)

### ➤ Pourquoi ?

* Partager des données entre composants
* Éviter props drilling

---

# 📁 /types

### ➤ Rôle

Définition des types TypeScript.

### ➤ Exemples

* User
* Project
* AnalyticsData

### ➤ Pourquoi ?

* Réduire les erreurs
* Améliorer la lisibilité

---

# 📁 /constants

### ➤ Rôle

Données statiques et configurations.

### ➤ Exemples

* menu sidebar
* routes
* rôles utilisateurs

### ➤ Pourquoi ?

* Éviter hardcoding
* Centraliser les données fixes

---

# 🧠 Bonnes pratiques

✅ Ne pas mélanger UI et logique
✅ Toujours réutiliser les composants
✅ Centraliser les données
✅ Utiliser TypeScript correctement
✅ Respecter la structure