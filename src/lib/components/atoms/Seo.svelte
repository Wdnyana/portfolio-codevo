<script lang="ts">
	import { page } from '$app/stores'
	import { siteConfig } from '$lib/data/site'
	import { PUBLIC_BASE_URL } from '$env/static/public'
	import {
		generateSchemas,
		organizationSchema,
		websiteSchema,
		articleSchema,
		serviceSchema,
	} from '$lib/utils/seo'

	let {
		title,
		description = siteConfig.description,
		type = 'website',
		image,
		publishDate,
		jsonLd = [], // Allow passing custom schemas
	} = $props<{
		title: string
		description?: string
		type?: 'website' | 'article' | 'service'
		image?: string
		publishDate?: string
		jsonLd?: object[]
	}>()

	// Compute Base URL and Canonical
	const baseUrl = PUBLIC_BASE_URL || siteConfig.url
	const canonicalUrl = $derived(`${baseUrl}${$page.url.pathname}`)

	// Compute Full Title
	const fullTitle = $derived(title === siteConfig.name ? title : `${title} | ${siteConfig.name}`)

	// Compute Image (Fallback to default OG)
	const ogImage = $derived(image || `${baseUrl}/og-default.jpg`)

	// Generate Structured Data (GEO Strategy)
	let schemas = $derived.by(() => {
		const baseSchemas = [organizationSchema(), websiteSchema()]
		const extraSchemas = [...jsonLd]

		if (type === 'article' && publishDate) {
			extraSchemas.push(
				articleSchema({
					title,
					description,
					image: ogImage,
					publishedAt: publishDate,
				}),
			)
		}

		if (type === 'service') {
			extraSchemas.push(serviceSchema())
		}

		return generateSchemas([...baseSchemas, ...extraSchemas])
	})
</script>

<svelte:head>
	<!-- Standard Meta -->
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Article Specific -->
	{#if type === 'article' && publishDate}
		<meta property="article:published_time" content={publishDate} />
		<meta property="article:author" content={siteConfig.name} />
	{/if}

	<!-- JSON-LD Structured Data for AI/GEO -->
	{@html schemas}
</svelte:head>
