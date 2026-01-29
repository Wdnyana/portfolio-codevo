<script lang="ts">
	import { page } from '$app/stores'
	import { AlertTriangle, Home, Ghost } from 'lucide-svelte'
	import Seo from '$lib/components/atoms/Seo.svelte'

	// Reactive status derived from store
	let status = $derived($page.status)
	let message = $derived($page.error?.message || 'Unknown Error')

	// Config based on status
	let config = $derived(
		status === 404
			? {
					code: '404',
					label: 'VOID_DETECTED',
					desc: 'The signal has been lost. This sector does not exist.',
					color: 'text-quark-beam',
					borderColor: 'border-quark-beam',
					icon: Ghost,
				}
			: {
					code: status.toString(),
					label: 'SYSTEM_FAILURE',
					desc: 'Critical logic exception. Automatic recovery failed.',
					color: 'text-red-500',
					borderColor: 'border-red-500',
					icon: AlertTriangle,
				},
	)
</script>

<Seo title="{config.code} Error" description="System Malfunction" />

<div
	class="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden p-4 text-center"
>
	<div class="pointer-events-none absolute inset-0 opacity-5">
		<div class="absolute top-1/2 left-0 h-[1px] w-full bg-white"></div>
		<div class="absolute top-1/3 left-0 h-[1px] w-full bg-white"></div>
	</div>

	<div class="relative z-10 space-y-8">
		<div
			class="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 {config.borderColor} bg-void shadow-[0_0_30px_rgba(0,0,0,0.5)]"
		>
			<config.icon class="h-10 w-10 {config.color}" />
		</div>

		<div class="space-y-2">
			<h1 class="font-display text-9xl font-bold tracking-tighter opacity-90 {config.color}">
				{config.code}
			</h1>
			<div class="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1">
				<span class="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
					ERR :: {config.label}
				</span>
			</div>
		</div>

		<p class="mx-auto max-w-md font-mono text-sm leading-relaxed text-zinc-500">
			> {config.desc}<br />
			> Trace: {message}
		</p>

		<div class="pt-8">
			<a
				href="/"
				class="group inline-flex items-center gap-3 rounded-sm bg-white px-6 py-3 font-mono text-sm font-bold text-void transition-all duration-300 hover:bg-quark-beam hover:text-white"
			>
				<Home class="h-4 w-4" />
				<span>INITIATE_RETURN_SEQUENCE</span>
			</a>
		</div>
	</div>
</div>
