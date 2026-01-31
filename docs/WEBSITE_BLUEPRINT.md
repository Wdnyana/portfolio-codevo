# WEBSITE_BLUEPRINT.md

## PROJECT OVERVIEW

**Project:** Codevo Solutions Official Brand Site
**Type:** High-Performance Static Portfolio (SSG)
**Stack:** SvelteKit (Adapter Static), Tailwind CSS v4, TypeScript
**Hosting:** Cloudflare Pages / Vercel (Zero Cost)

---

## 1. DESIGN LANGUAGE: "THE DIGITAL LABORATORY"

### Concept & Vibe

Website ini bukan sekadar profil perusahaan, tapi sebuah **"Software Lab"**.

- **Keywords:** Precision, Industrial, Editorial, Raw, Data-Driven.
- **Aesthetic:** Dark mode dominan, garis grid halus (blueprint style), tipografi besar (editorial), dan elemen UI yang terinspirasi dari terminal/IDE.

### Color Palette (Tailwind v4 Variables)

Diatur dalam `app.css` menggunakan `@theme`:

- **Background (Void):** `#09090b` (Zinc-950) - _Dasar gelap gulita._
- **Surface (Panel):** `#18181b` (Zinc-900) - _Untuk kartu Bento Grid._
- **Border (Line):** `#27272a` (Zinc-800) - _Garis-garis halus._
- **Text (Primary):** `#f4f4f5` (Zinc-100) - _Kontras tinggi tapi tidak menyilaukan._
- **Text (Muted):** `#a1a1aa` (Zinc-400) - _Meta data._
- **Accent A (Quark-Beam):** `#3b82f6` (Blue-500) - _Representasi Quarkus/Tech._
- **Accent B (Core-Heat):** `#f97316` (Orange-500) - _Highlight/Java vibes._

### UX Layout: The Responsive Bento Grid

Menggunakan pendekatan **Mobile-First**.

- **Mobile:** Stack vertikal yang rapi, mudah di-scroll jempol.
- **Desktop:** Grid modular (Bento) yang memenuhi layar.

**Tailwind v4 Strategy:**
Gunakan container queries untuk fleksibilitas kartu.

```html
<div class="@container w-full">
	<div class="grid grid-cols-1 gap-4 @lg:grid-cols-4 @lg:grid-rows-2"></div>
</div>
```
