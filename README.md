<div align="center">

# 🧪 Codevo Solutions

### _The Software Laboratory_

**A modern, high-performance portfolio website built with cutting-edge web technologies**

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[Live Demo](https://codevosolutions.com) • [Report Bug](https://github.com/codevo/portfolio/issues) • [Request Feature](https://github.com/codevo/portfolio/issues)

</div>

---

## 📖 Introduction

**Codevo Solutions** is a digital agency and software laboratory specializing in custom software development, SaaS solutions, and automation engineering. This repository contains our official brand website—a modern, headless CMS-powered portfolio built with **SvelteKit** and **Sanity.io**.

The architecture follows **Clean Architecture principles** with a service layer pattern, ensuring maintainability, scalability, and type safety throughout the codebase.

---

## ✨ Key Features

### ⚡ **High Performance**

- **SvelteKit** for blazing-fast SSR/SSG capabilities
- Deployed on **Vercel Edge Network** for global low-latency access
- Optimized images with Sanity's CDN and automatic format conversion

### 🎨 **Headless CMS Architecture**

- **Sanity Studio** for full content control
- Custom schemas for:
  - **Projects** - Client work and internal ventures (differentiated by `projectType`)
  - **Services** - Service offerings with icon mapping
  - **Lab Notes** - Engineering blog with category filtering
- Real-time content updates without redeployment

### 💎 **Clean Architecture**

- Service Repository Pattern (`src/lib/services/sanity.ts`)
- Centralized data fetching with error handling
- Type-safe GROQ queries with TypeScript interfaces
- Separation of concerns: UI ↔ Service Layer ↔ CMS

### 🔍 **SEO & GEO Optimized**

- JSON-LD structured data (Organization, Website, Article schemas)
- Dynamic `sitemap.xml` and `robots.txt` generation
- OpenGraph and Twitter Card meta tags
- Optimized for local (Bali) and technical (Custom SaaS) searches

### 🎯 **Developer Experience**

- **TypeScript** for type safety across the stack
- **Tailwind CSS v4** for rapid styling with custom design tokens
- **PNPM** workspace for efficient dependency management
- **ESLint + Prettier** for code consistency

---

## 📁 Project Structure

```
portfolio-codevo/
├── src/                        # SvelteKit Frontend
│   ├── lib/
│   │   ├── components/         # Reusable UI components
│   │   ├── services/           # Service layer (Sanity client)
│   │   ├── utils/              # Helper functions
│   │   └── data/               # Static site configuration
│   ├── routes/                 # SvelteKit file-based routing
│   │   ├── +page.svelte        # Homepage
│   │   ├── projects/           # Projects listing & detail pages
│   │   ├── blog/               # Lab Notes (Engineering blog)
│   │   ├── services/           # Services page
│   │   └── contact/            # Contact form
│   └── app.css                 # Global styles + Tailwind
│
├── sanity-schemas/             # Sanity CMS Schemas
│   ├── project.ts              # Project schema (with projectType field)
│   ├── blog.ts                 # Blog post schema (with category field)
│   ├── service.ts              # Service schema (with icon mapping)
│   ├── blockContent.ts         # Rich text editor schema
│   └── index.ts                # Schema registration
│
├── sanity.config.ts            # Sanity Studio configuration
├── sanity.cli.ts               # Sanity CLI configuration
├── .env                        # Environment variables (gitignored)
├── .env.example                # Environment template
└── package.json                # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** `>= 18.x`
- **PNPM** `>= 8.x` (Install via `npm install -g pnpm`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codevo/portfolio-codevo.git
   cd portfolio-codevo
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Setup environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Sanity credentials:

   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   PUBLIC_BASE_URL=http://localhost:5173
   ```

### Development

You need to run **two servers simultaneously**: the SvelteKit frontend and the Sanity Studio CMS.

#### **Terminal 1: Frontend (SvelteKit)**

```bash
pnpm dev
```

- Frontend runs at: `http://localhost:5173`

#### **Terminal 2: CMS (Sanity Studio)**

```bash
pnpm sanity:dev
```

- Studio runs at: `http://localhost:3333`

### Creating Content

1. Open Sanity Studio: `http://localhost:3333`
2. Create your first **Project**:
   - Set `projectType` to either:
     - `internal-product` (for ventures - shows in "Our Ventures" section)
     - `client-work` (for client projects - shows in "Selected Client Work")
   - Add `status`: `live`, `beta`, or `archived`
   - Upload a cover image
3. Create a **Blog Post**:
   - Select at least one `category`: Engineering, Business, Tutorial, or Update
4. Refresh your frontend to see changes

---

## 🛠️ Available Scripts

```json
{
	"dev": "vite dev", // Start SvelteKit dev server
	"build": "vite build", // Build for production
	"preview": "vite preview", // Preview production build
	"sanity:dev": "sanity dev", // Start Sanity Studio
	"sanity:build": "sanity build", // Build Studio for production
	"sanity:deploy": "sanity deploy", // Deploy Studio to Sanity hosting
	"sanity:typegen": "sanity typegen generate" // Generate TypeScript types from schemas
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect SvelteKit

3. **Configure Environment Variables**

   Add these in Vercel project settings:

   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   PUBLIC_BASE_URL=https://codevosolutions.com
   ```

4. **Deploy Sanity Studio** (Optional - for content editors)
   ```bash
   pnpm sanity:deploy
   ```
   This creates a hosted Studio at: `https://your-project.sanity.studio`

### CORS Configuratiodev.codevo@gmail.comn

Add your production domain to Sanity CORS origins:

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Navigate to **API** → **CORS Origins**
4. Add:
   - `http://localhost:5173` (development)
   - `https://codevosolutions.com` (production)

---

## 🏗️ Architecture Overview

### Service Layer Pattern

All Sanity data fetching is abstracted into a service layer:

```typescript
// src/lib/services/sanity.ts
export async function getProjects(): Promise<SanityProject[]> {
  const query = groq`*[_type == "project"] | order(year desc) { ... }`
  return await client.fetch(query)
}
```

### Type Safety

TypeScript interfaces ensure type safety across the app:

```typescript
export interface SanityProject {
  title: string
  projectType: 'client-work' | 'internal-product'
  status: 'live' | 'beta' | 'archived'
  url?: string
  // ...
}
```

### Component Structure

```
components/
├── atoms/           # Basic UI elements (Button, Icon, etc.)
├── molecules/       # Composite components (Card, BentoCard)
└── organisms/       # Complex components (Navbar, Footer, Hero)
```

---

## 🎨 Design System

- **Fonts**: Space Grotesk (Display), JetBrains Mono (Code)
- **Color Palette**:
  - `quark-beam`: Primary accent (#F59E0B - Amber)
  - `void`: Background (#09090B - Near-black)
  - `panel`: Card backgrounds (#18181B - Zinc-900)
- **Animations**: GSAP with ScrollTrigger for reveal effects

---

## 📝 Content Types

### Projects

Differentiated by `projectType`:

- **Internal Product** - SaaS ventures (enhanced visual styling)
- **Client Work** - Client projects (standard styling)

### Lab Notes (Blog)

Engineering-focused blog with categories:

- Engineering
- Business
- Tutorial
- Update

### Services

Service offerings with icon mapping to Lucide icons.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential. All rights reserved © 2026 Codevo Solutions.

---

## 📧 Contact

**Codevo Solutions**  
📍 Bali, Indonesia  
🌐 [codevosolutions.com](https://codevosolutions.com)  
📧 dev.codevo@gmail.com

---

<div align="center">

**Built with ❤️ in Bali by Codevo Solutions**

_Engineering the future, one line at a time._

</div>
