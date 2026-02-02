<script lang="ts">
	import '../app.css'
	import '@fontsource/space-grotesk/300.css'
	import '@fontsource/space-grotesk/400.css'
	import '@fontsource/space-grotesk/500.css'
	import '@fontsource/space-grotesk/600.css'
	import '@fontsource/space-grotesk/700.css'
	import '@fontsource/jetbrains-mono/400.css'
	import '@fontsource/jetbrains-mono/500.css'
	import '@fontsource/jetbrains-mono/700.css'
	import '@fontsource/ibm-plex-sans/400.css'
	import '@fontsource/ibm-plex-sans/500.css'
	import '@fontsource/ibm-plex-sans/600.css'
	import favicon from '$lib/assets/favicon.svg'

	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import SkipLink from '$lib/components/atoms/SkipLink.svelte'
	import CustomCursor from '$lib/components/ui/CustomCursor.svelte'
	import { inject } from '@vercel/analytics'
	import { onNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { MetaTags } from 'svelte-meta-tags'
	import { siteConfig } from '$lib/data/site'
	import { page } from '$app/stores'

	let { children } = $props()

	// Reactive canonical URL based on current page
	const canonicalUrl = $derived($page.url.href)


	onMount(() => {
		inject()
	})

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<svelte:head>
	<MetaTags
		title={siteConfig.title}
		description={siteConfig.descriptionLong}
		canonical={canonicalUrl}
		openGraph={{
			type: 'website',
			url: canonicalUrl,
			title: siteConfig.title,
			description: siteConfig.descriptionLong,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: 'Codevo Solutions - Founder-Led Software Laboratory',
				},
			],
			locale: 'en_US',
		}}
		twitter={{
			site: siteConfig.social.twitter,
			cardType: 'summary_large_image',
			title: siteConfig.title,
			description: siteConfig.descriptionLong,
			image: siteConfig.ogImage,
			imageAlt: 'Codevo Solutions - Founder-Led Software Laboratory',
		}}
		additionalMetaTags={[
			{
				name: 'keywords',
				content: siteConfig.keywords.join(', '),
			},
			{
				name: 'author',
				content: siteConfig.author.name,
			},
			{
				name: 'theme-color',
				content: '#0F172A',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		]}
		additionalLinkTags={[
			{
				rel: 'icon',
				href: favicon,
			},
		]}
	/>

	<link rel="icon" href={favicon} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"@id": "https://codevosolutions.com/#organization",
					"name": "Codevo Solutions",
					"url": "https://codevosolutions.com",
					"logo": "https://codevosolutions.com/logo-codevo.png",
					"founder": {
						"@type": "Person",
						"name": "I Putu Purwa Wiadnyana Putra",
						"jobTitle": "Lead Software Architect"
					},
					"slogan": "Founder-Led Software Laboratory based in Bali",
					"contactPoint": {
						"@type": "ContactPoint",
						"email": "hello@codevosolutions.com",
						"contactType": "customer service",
						"areaServed": "ID",
						"availableLanguage": ["en", "id"]
					}
				},
				{
					"@type": "ProfessionalService",
					"parentOrganization": { "@id": "https://codevosolutions.com/#organization" },
					"name": "Codevo Software Lab",
					"description": "High-Performance SaaS Development, AI Automation, and Legacy Modernization services.",
					"priceRange": "$$$",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Bali",
						"addressCountry": "ID"
					},
					"knowsAbout": [
						"SvelteKit Architecture",
						"Generative AI Integration",
						"SaaS Product Development"
					]
				}
			]
		}
	</script>
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	<SkipLink />
	<Navbar />

	<div class="lab-grid fixed inset-0 z-[-1]"></div>

	<main id="main-content" class="w-full flex-1 px-3 pt-20 lg:px-12">
		{@render children()}
	</main>

	<Footer />
</div>

<!-- Custom Cursor (Desktop Only) -->
<CustomCursor />
