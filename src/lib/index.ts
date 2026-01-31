/**
 * $lib Barrel Export File
 * ============================================
 * Central export point for all client-side components and utilities.
 *
 * IMPORTANT: Do NOT re-export server-side code (e.g., services/sanity.ts)
 * to prevent accidentally importing secrets in client bundles.
 *
 * Usage:
 * import { BentoCard, Seo, animate } from '$lib'
 */

// ========================================
// Atoms
// ========================================
export { default as Seo } from './components/atoms/Seo.svelte'
export { default as PortableText } from './components/atoms/PortableText.svelte'
export { default as SkipLink } from './components/atoms/SkipLink.svelte'

// Portable Text Components
export * as PortableTextComponents from './components/atoms/portable-text'

// ========================================
// Molecules
// ========================================
export { default as BentoCard } from './components/molecules/BentoCard.svelte'
export { default as EmptyState } from './components/molecules/EmptyState.svelte'

// ========================================
// Organisms
// ========================================
export { default as ContactForm } from './components/organisms/ContactForm.svelte'
export { default as Footer } from './components/organisms/Footer.svelte'
export { default as Hero } from './components/organisms/Hero.svelte'
export { default as Logo } from './components/organisms/Logo.svelte'
export { default as Navbar } from './components/organisms/Navbar.svelte'
export { default as PortableTextRenderer } from './components/organisms/PortableTextRenderer.svelte'

// ========================================
// Utils (Client-Safe Only)
// ========================================

// Class name utility
export { cn } from './utils/cn'

// Sanity image helper (client-safe)
export { urlFor, getImageDimensions } from './utils/sanity'

// SEO utilities
export {
	generateSchemas,
	organizationSchema,
	websiteSchema,
	serviceSchema,
	articleSchema,
} from './utils/seo'

// ========================================
// Actions
// ========================================
export { animate } from './actions/animate'
export { spotlight } from './actions/spotlight'

// ========================================
// Helpers (Client-Safe Only)
// ========================================
export * from './helpers/schemas'

// ========================================
// NOTE: Server-Side Exclusions
// ========================================
// The following are intentionally NOT exported to prevent
// accidental client-side imports:
// - services/sanity.ts (contains Sanity client for server-side use)
// - Any other server-only code
//
// For server-side imports, use:
// import { getProjects } from '$lib/services/sanity'
