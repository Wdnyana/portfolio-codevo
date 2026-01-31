<script lang="ts">
	import { BentoCard, Seo, animate } from '$lib'
	import { Code, Database, Cpu, Zap, Rocket, Handshake, Lock, Cloud } from 'lucide-svelte'
	import type { ComponentType } from 'svelte'

	let { data } = $props()

	// DEBUG: Log data dari Sanity untuk memeriksa iconName
	console.log('🔍 [DEBUG] Data Services dari Sanity:', data.services)

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
	title="Engineering Services"
	description="Codevo Solutions provides custom SaaS architecture, AI automation, and system modernization to help businesses scale efficiently."
	type="service"
/>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl space-y-12">
		<div class="space-y-4 text-center">
			<h1 class="font-display text-4xl font-bold text-white md:text-5xl">
				Beyond "Just a Website"
			</h1>
			<p class="mx-auto max-w-2xl text-zinc-400">
				We architect digital ecosystems that solve critical business problems, automate manual work,
				and drive revenue.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each data.services as service, i}
				<div
					class={i === 0 || i === data.services.length - 1 ? 'md:col-span-2' : ''}
					use:animate={{ delay: i * 0.1 }}
				>
					<BentoCard
						title={service.title}
						description={service.description ?? ''}
						icon={iconMap[service.iconName ?? ''] ?? Code}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
