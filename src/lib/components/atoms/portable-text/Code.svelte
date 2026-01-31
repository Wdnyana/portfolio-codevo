<script lang="ts">
	/**
	 * Code Component
	 * Svelte 5 compliant - inline code with monospace styling
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<code
	class="rounded bg-zinc-800/50 px-1.5 py-0.5 font-mono text-sm text-quark-beam ring-1 ring-zinc-700/50"
>
	{@render children()}
</code>
