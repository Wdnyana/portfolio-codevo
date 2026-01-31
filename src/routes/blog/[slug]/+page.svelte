<script lang="ts">
	import { urlFor, PortableTextRenderer, Seo } from '$lib'
	import type { PageData } from './$types'

	let { data } = $props<{ data: PageData }>()
	let post = $derived(data.post)

	// Temporary inline date formatter if helper doesn't exist, or specific format
	function formatDateStr(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		})
	}
</script>

<Seo
	title="{post.title} - Lab Notes"
	description={post.excerpt || `Read ${post.title}`}
	image={post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined}
	type="article"
	publishDate={post.publishedAt}
/>

<div class="container mx-auto px-4 pt-32 pb-20 md:px-6">
	<!-- Header -->
	<header class="mx-auto mb-12 max-w-4xl text-center">
		<div class="mb-6 flex items-center justify-center gap-4 font-mono text-sm text-zinc-500">
			<time datetime={post.publishedAt}>{formatDateStr(post.publishedAt)}</time>
		</div>
		<h1 class="mb-8 font-display text-4xl leading-tight font-bold text-white md:text-5xl">
			{post.title}
		</h1>

		<!-- Tags -->
		{#if post.tags && post.tags.length > 0}
			<div class="flex flex-wrap justify-center gap-2">
				{#each post.tags as tag}
					<span
						class="rounded-full border border-quark-beam/20 bg-quark-beam/10 px-3 py-1 font-mono text-xs tracking-wider text-quark-beam uppercase"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Main Image -->
	{#if post.mainImage}
		<div
			class="mx-auto mb-16 aspect-video max-w-5xl overflow-hidden rounded-2xl border border-white/10"
		>
			<img
				src={urlFor(post.mainImage).width(1200).height(675).url()}
				alt={post.title}
				width="1200"
				height="675"
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	<!-- Content -->
	<article class="mx-auto max-w-2xl">
		{#if post.body}
			<PortableTextRenderer value={post.body} />
		{/if}
	</article>
</div>
