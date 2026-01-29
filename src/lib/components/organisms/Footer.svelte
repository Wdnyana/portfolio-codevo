<script lang="ts">
	import { siteConfig } from '$lib/data/site'
	import { navItems } from '$lib/data/navigation'
	import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-svelte'

	const currentYear = new Date().getFullYear()
</script>

<footer class="mt-20 border-t border-border bg-void/80 backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
		<div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-4 text-center md:text-left">
				<div class="font-display text-2xl font-bold tracking-tighter text-white">
					<span class="text-quark-beam">&lt;</span>
					CODEVO
					<span class="text-quark-beam">/&gt;</span>
				</div>
				<p class="mx-auto max-w-xs text-sm text-zinc-400 md:mx-0">
					{siteConfig.description}
				</p>
				<div class="flex justify-center space-x-4 md:justify-start">
					{#if siteConfig.links.github}
						<a
            target="_blank"
							href={siteConfig.links.github}
							class="text-zinc-400 transition-colors hover:text-white"
						>
							<Github class="h-5 w-5" />
						</a>
					{/if}
					{#if siteConfig.links.instagram}
						<a
            target="_blank"
							href={siteConfig.links.instagram}
							class="text-zinc-400 transition-colors hover:text-white"
						>
							<Instagram class="h-5 w-5" />
						</a>
					{/if}
				</div>
			</div>

			<div class="text-center md:text-left">
				<h3 class="mb-4 font-mono text-sm font-semibold tracking-wider text-white uppercase">
					Coordinates
				</h3>
				<ul class="space-y-3">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="text-sm text-zinc-400 transition-colors hover:text-quark-beam"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="text-center md:text-left">
				<h3 class="mb-4 font-mono text-sm font-semibold tracking-wider text-white uppercase">
					Legal
				</h3>
				<ul class="space-y-3">
					<li>
						<a href="/privacy" class="text-sm text-zinc-400 hover:text-white">Privacy Policy</a>
					</li>
					<li>
						<a href="/terms" class="text-sm text-zinc-400 hover:text-white">Terms of Service</a>
					</li>
					<li><a href="/sitemap.xml" class="text-sm text-zinc-400 hover:text-white">Sitemap</a></li>
				</ul>
			</div>

			<div class="flex flex-col items-center text-center md:items-start md:text-left">
				<h3 class="mb-4 font-mono text-sm font-semibold tracking-wider text-white uppercase">
					Status
				</h3>
				<div
					class="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
					</span>
					ALL SYSTEMS NOMINAL
				</div>
				<p class="mt-4 font-mono text-xs text-zinc-500">
					Build v2.0.4<br />
					Bali, Indonesia
				</p>
			</div>
		</div>
	</div>

	<div class="border-t border-white/5 bg-black/20">
		<div class="mx-auto max-w-7xl px-6 py-6 text-center">
			<p class="font-mono text-xs text-zinc-500">
				&copy; {currentYear}
				{siteConfig.name}. Engineered for performance.
			</p>
		</div>
	</div>
</footer>
