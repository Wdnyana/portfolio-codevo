<script lang="ts">
	import { spotlight } from '$lib/actions/spotlight'
	import { cn } from '$lib/utils/cn'

	let { title, description, class: className = '', icon: Icon, delay = 0 } = $props()
</script>

<div
	use:spotlight
	class={cn(
		'group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-panel/50 p-6 transition-colors duration-300 hover:border-blue-500/50',
		className,
	)}
	style="animation-delay: {delay}ms; animation-fill-mode: forwards;"
>
	<!-- Gradient Glow on Hover -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-quark-beam/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
	></div>

	<div
		class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.15), transparent 40%);"
	></div>

	<div class="relative z-10 flex h-full flex-col justify-between">
		{#if Icon}
			<div class="mb-4 text-quark-beam">
				<Icon size={32} />
			</div>
		{/if}

		<div class="space-y-2">
			<h3
				class="font-display text-xl font-bold text-primary transition-colors group-hover:text-white"
			>
				{title}
			</h3>
			<p class="text-sm leading-relaxed text-text-muted">
				{description}
			</p>
		</div>
	</div>
</div>
