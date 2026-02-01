<script lang="ts">
	import { Hero, Seo, BentoCard, animate } from '$lib'
	import { Code, Database, Cpu, Zap, Handshake, Rocket, Lock, Cloud } from 'lucide-svelte'
	import type { ComponentType } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	// Icon mapping: Explicit string-to-component mapping
	// Includes both PascalCase and lowercase for case-insensitive matching
	const iconMap: Record<string, ComponentType> = {
		// PascalCase (yang benar dari Sanity)
		'Code': Code,
		'Database': Database,
		'Cpu': Cpu,
		'Zap': Zap,
		'Handshake': Handshake,
		'Rocket': Rocket,
		'Lock': Lock,
		'Cloud': Cloud,
		// Lowercase fallback (untuk berjaga-jaga)
		'code': Code,
		'database': Database,
		'cpu': Cpu,
		'zap': Zap,
		'handshake': Handshake,
		'rocket': Rocket,
		'lock': Lock,
		'cloud': Cloud,
	}
</script>

<Seo
	title="Strategic Software Laboratory"
	description="Codevo Solutions transforms manual businesses into automated digital empires through custom SaaS and AI integration."
/>

<div class="relative z-10">
	<Hero />

	<section class="px-4 py-20 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl space-y-12">
			<div class="space-y-4 text-center" use:animate>
				<h2 class="font-display text-3xl font-bold text-white md:text-4xl">
					The Codevo Difference
				</h2>
				<p class="mx-auto max-w-2xl text-zinc-400">
					Stop relying on fragile spreadsheets. We build robust systems that turn your operations
					into a competitive advantage.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each data.homeServices as service, i}
					<div
						class={i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'}
						use:animate={{ delay: 0.1 * (i + 1) }}
					>
						<BentoCard
							title={service.title}
							description={service.description || ''}
							icon={iconMap[service.iconName ?? ''] ?? Code}
						/>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
