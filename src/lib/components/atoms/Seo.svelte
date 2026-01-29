<script lang="ts">
	import { siteConfig } from '$lib/data/site'
	import { generateSchema } from '$lib/utils/seo'

	let { title, description = siteConfig.description, type = 'website' } = $props()

	let fullTitle = $derived(`${title} | ${siteConfig.name}`)
	let jsonLd = generateSchema()
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteConfig.name} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />

	{@html jsonLd}
</svelte:head>
