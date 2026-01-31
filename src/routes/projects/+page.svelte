<script lang="ts">
	import { ArrowUpRight, ExternalLink, Rocket, FolderOpen } from 'lucide-svelte'
	import { Seo, spotlight, animate, urlFor } from '$lib'
	import EmptyState from '$lib/components/molecules/EmptyState.svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	// Filter projects by type
	const ventures = $derived(data.projects.filter((p) => p.projectType === 'internal-product'))
	const clientWork = $derived(data.projects.filter((p) => p.projectType === 'client-work'))
	const hasNoProjects = $derived(data.projects.length === 0)
</script>

<Seo
	title="Selected Case Studies"
	description="Explore how we've helped businesses transform through custom software and automation."
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	{#if hasNoProjects}
		<EmptyState
			title="No Projects Deployed Yet"
			message="Our engineers are currently compiling the latest case studies. Check back soon or explore our services."
			actionLabel="View Services"
			actionLink="/services"
			icon={FolderOpen}
		/>
	{:else}
		<div class="mx-auto max-w-7xl space-y-20">
			<!-- Our Ventures Section -->
			{#if ventures.length > 0}
			<div class="space-y-8">
				<div class="space-y-4 text-center">
					<div class="flex items-center justify-center gap-2">
						<Rocket class="h-8 w-8 text-quark-beam" />
						<h2 class="font-display text-3xl font-bold text-white md:text-4xl">Our Ventures</h2>
					</div>
					<p class="mx-auto max-w-2xl text-zinc-400">
						Internal products and SaaS ventures we're building to push the boundaries of innovation.
					</p>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each ventures as project, i}
						<div
							use:spotlight
							use:animate={{ delay: i * 0.1 }}
							class="group relative flex flex-col overflow-hidden rounded-xl border-2 border-quark-beam/30 bg-panel/50 shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 hover:border-quark-beam/60 hover:shadow-[0_0_50px_rgba(245,158,11,0.2)]"
						>
							<!-- Enhanced glow effect -->
							<div
								class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.25), transparent 40%);"
							></div>

							<div class="relative z-10 flex h-full flex-col">
								<div
									class="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-quark-beam/20 bg-zinc-800/50 text-zinc-600"
								>
									{#if project.coverImage}
										<img
											src={urlFor(project.coverImage).width(800).height(450).url()}
											alt={project.title}
											width="800"
											height="450"
											class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											loading="lazy"
										/>
									{:else}
										<span class="font-mono text-sm">{project.slug.current}_preview.jpg</span>
									{/if}
									<!-- Status badge -->
									{#if project.status}
										<div class="absolute top-3 right-3">
											<span
												class="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm
													{project.status === 'live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : ''}
													{project.status === 'beta' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : ''}
													{project.status === 'archived' ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-500/30' : ''}"
											>
												{project.status}
											</span>
										</div>
									{/if}
								</div>

								<div class="flex flex-grow flex-col justify-between space-y-4 p-6">
									<div>
										<div class="flex items-start justify-between gap-4">
											<div>
												<h3 class="font-display text-xl leading-tight font-bold text-white">
													<a
														href="/projects/{project.slug.current}"
														class="transition-colors hover:text-quark-beam"
													>
														{project.title}
													</a>
												</h3>
												{#if project.year}
													<p class="mt-1 font-mono text-xs text-quark-beam">
														{project.year}
														{#if project.subtitle}• {project.subtitle}{/if}
													</p>
												{/if}
											</div>

											<div class="flex gap-1">
												{#if project.url}
													<a
														href={project.url}
														target="_blank"
														rel="noopener noreferrer"
														class="shrink-0 rounded-full p-1 text-quark-beam transition-colors hover:bg-quark-beam/10"
														aria-label="Visit {project.title}"
													>
														<ExternalLink class="h-5 w-5" />
													</a>
												{/if}
												<a
													href="/projects/{project.slug.current}"
													class="shrink-0 rounded-full p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
													aria-label="View {project.title} details"
												>
													<ArrowUpRight class="h-5 w-5" />
												</a>
											</div>
										</div>

										{#if project.description}
											<p
												class="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
											>
												{project.description}
											</p>
										{/if}
									</div>

									{#if project.techStack}
										<div class="mt-auto flex flex-wrap gap-2 pt-4">
											{#each project.techStack.slice(0, 3) as tech}
												<span
													class="rounded-md border border-quark-beam/20 bg-void/50 px-2 py-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase transition-colors duration-300 group-hover:border-quark-beam/30 group-hover:text-quark-beam/80"
												>
													{tech}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Client Work Section -->
		{#if clientWork.length > 0}
			<div class="space-y-8">
				<div class="space-y-4 text-center">
					<h2 class="font-display text-3xl font-bold text-white md:text-4xl">Selected Client Work</h2>
					<p class="mx-auto max-w-2xl text-zinc-400">
						Mission-critical systems we've engineered and shipped for our clients.
					</p>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each clientWork as project, i}
						<div
							use:spotlight
							use:animate={{ delay: i * 0.1 }}
							class="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-panel/50 transition-colors hover:border-quark-beam/50"
						>
							<div
								class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.15), transparent 40%);"
							></div>

							<div class="relative z-10 flex h-full flex-col">
								<div
									class="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-white/5 bg-zinc-800/50 text-zinc-600"
								>
									{#if project.coverImage}
										<img
											src={urlFor(project.coverImage).width(800).height(450).url()}
											alt={project.title}
											width="800"
											height="450"
											class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											loading="lazy"
										/>
									{:else}
										<span class="font-mono text-sm">{project.slug.current}_preview.jpg</span>
									{/if}
								</div>

								<div class="flex flex-grow flex-col justify-between space-y-4 p-6">
									<div>
										<div class="flex items-start justify-between gap-4">
											<div>
												<h3 class="font-display text-xl leading-tight font-bold text-white">
													<a
														href="/projects/{project.slug.current}"
														class="transition-colors hover:text-quark-beam"
													>
														{project.title}
													</a>
												</h3>
												{#if project.year}
													<p class="mt-1 font-mono text-xs text-quark-beam">
														{project.year}
														{#if project.subtitle}• {project.subtitle}{/if}
													</p>
												{/if}
											</div>

											<a
												href="/projects/{project.slug.current}"
												class="shrink-0 rounded-full p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
												aria-label="View {project.title} details"
											>
												<ArrowUpRight class="h-5 w-5" />
											</a>
										</div>

										{#if project.description}
											<p
												class="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200"
											>
												{project.description}
											</p>
										{/if}
									</div>

									{#if project.techStack}
										<div class="mt-auto flex flex-wrap gap-2 pt-4">
											{#each project.techStack.slice(0, 3) as tech}
												<span
													class="rounded-md border border-white/5 bg-void/50 px-2 py-1 font-mono text-[10px] tracking-wider text-zinc-500 uppercase transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-400"
												>
													{tech}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			{/if}
		</div>
	{/if}
</section>
