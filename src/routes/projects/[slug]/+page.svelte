<script lang="ts">
	import { urlFor, PortableTextRenderer, Seo } from '$lib'
	import type { PageData } from './$types'

	let { data } = $props<{ data: PageData }>()
	let project = $derived(data.project)
</script>

<Seo
	title="{project.title} - Codevo Solutions"
	description={project.description || `Case study: ${project.title}`}
	image={project.coverImage ? urlFor(project.coverImage).width(1200).height(630).url() : undefined}
/>

<div class="container mx-auto px-4 pt-32 pb-20 md:px-6">
	<!-- Header -->
	<header class="mb-12 max-w-4xl">
		<div class="mb-4 flex items-center gap-4 font-mono text-sm text-quark-beam">
			<span>{project.year}</span>
			<span>/</span>
			<span>CASE STUDY</span>
		</div>
		<h1 class="mb-6 font-display text-4xl font-bold text-white md:text-6xl">
			{project.title}
		</h1>
		{#if project.subtitle}
			<p class="mb-8 text-xl text-zinc-400 md:text-2xl">{project.subtitle}</p>
		{/if}

		<!-- Tech Stack -->
		{#if project.techStack && project.techStack.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each project.techStack as tech}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Cover Image -->
	{#if project.coverImage}
		<div
			class="mb-16 aspect-video overflow-hidden rounded-2xl border border-white/10 md:aspect-[21/9]"
		>
			<img
				src={urlFor(project.coverImage).width(1920).height(820).url()}
				alt={project.title}
				width="1920"
				height="820"
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	<!-- Content -->
	<main class="mx-auto max-w-3xl">
		{#if project.content}
			<PortableTextRenderer value={project.content} />
		{/if}
	</main>
</div>
