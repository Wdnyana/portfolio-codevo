<script lang="ts">
	import { Construction } from 'lucide-svelte'

	interface Props {
		title: string
		message: string
		actionLink?: string
		actionLabel?: string
		icon?: any
	}

	let { title, message, actionLink, actionLabel, icon: Icon = Construction }: Props = $props()
</script>

<div class="flex min-h-[60vh] items-center justify-center px-4 py-20">
	<div
		class="group relative w-full max-w-2xl overflow-hidden rounded-xl border-2 border-dashed border-white/10 bg-panel/30 p-12 text-center backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-panel/40"
	>
		<!-- Animated Glow Effect -->
		<div
			class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
			style="background: radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05), transparent 70%);"
		></div>

		<!-- Content -->
		<div class="relative z-10 space-y-6">
			<!-- Icon with Bounce Animation -->
			<div class="flex justify-center">
				<div
					class="rounded-2xl border border-white/5 bg-void/50 p-6 shadow-lg animate-bounce-slow"
				>
					<Icon
						class="h-12 w-12 text-zinc-400 transition-colors duration-300 group-hover:text-quark-beam/80"
					/>
				</div>
			</div>

			<!-- Title -->
			<h2 class="font-display text-3xl font-bold text-white md:text-4xl">
				{title}
			</h2>

			<!-- Message -->
			<p class="mx-auto max-w-md text-lg leading-relaxed text-zinc-400">
				{message}
			</p>

			<!-- Action Button (Optional) -->
			{#if actionLink && actionLabel}
				<div class="pt-4">
					<a
						href={actionLink}
						class="inline-flex items-center gap-2 rounded-lg border border-quark-beam/30 bg-quark-beam/10 px-6 py-3 font-mono text-sm text-quark-beam transition-all duration-300 hover:border-quark-beam/60 hover:bg-quark-beam/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
					>
						{actionLabel}
					</a>
				</div>
			{/if}

			<!-- Terminal-style info -->
			<div class="pt-8">
				<div
					class="mx-auto max-w-md space-y-2 rounded-lg border border-white/5 bg-void/50 p-4 font-mono text-xs text-zinc-500"
				>
					<div class="flex items-center gap-2">
						<span class="text-green-500">$</span>
						<span>status: no_data_found</span>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-yellow-500">⚠</span>
						<span>waiting for content deployment...</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes bounce-slow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-bounce-slow {
		animation: bounce-slow 3s ease-in-out infinite;
	}
</style>
