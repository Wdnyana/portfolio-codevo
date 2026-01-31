<script lang="ts">
	/**
	 * Blockquote Component
	 * Svelte 5 compliant - quote styling with left border
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<blockquote
	class="my-6 border-l-4 border-quark-beam/40 bg-zinc-900/30 py-4 pl-6 pr-4 italic text-zinc-300"
>
	{@render children()}
</blockquote>
