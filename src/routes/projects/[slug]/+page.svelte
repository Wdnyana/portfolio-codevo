<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte'
	import type { Project } from '$lib/data/projects'

	import Seo from '$lib/components/atoms/Seo.svelte'

	let { data }: { data: { project: Project } } = $props()
	let project = $derived(data.project)
</script>

<Seo title={project.title} description={project.description} type="article" />

<section class="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl space-y-12">
		<!-- Back Navigation -->
		<a
			href="/projects"
			class="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Projects
		</a>

		<!-- Project Header -->
		<div class="space-y-6">
			<div class="space-y-2">
				<span class="font-mono text-sm tracking-wider text-quark-beam uppercase">
					{project.year} • {project.subtitle}
				</span>
				<h1 class="font-display text-4xl font-bold text-white md:text-6xl">
					{project.title}
				</h1>
			</div>

			<!-- Tech Stack -->
			<div class="flex flex-wrap gap-2">
				{#each project.techStack as tech}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>

		<!-- Project Description (Placeholder for content) -->
		<div class="prose prose-lg max-w-none border-t border-white/10 pt-8 prose-invert">
			<p class="leading-relaxed text-zinc-300">
				{project.description}
			</p>

			<p class="text-zinc-400">
				(More detailed case study content would go here via markdown or rich text field...)
			</p>
		</div>
	</div>
</section>
