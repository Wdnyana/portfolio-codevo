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
	import favicon from '$lib/assets/favicon.svg'

	import Navbar from '$lib/components/organisms/Navbar.svelte'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import { onNavigate } from '$app/navigation'

	let { children } = $props()

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
	<Navbar />

	<div class="lab-grid fixed inset-0 z-[-1]"></div>

	<main class="w-full flex-1 px-3 pt-20 lg:px-12">
		{@render children()}
	</main>

	<Footer />
</div>
