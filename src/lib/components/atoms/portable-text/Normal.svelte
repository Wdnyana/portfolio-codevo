<script lang="ts">
	/**
	 * Normal (Paragraph) Component
	 * Svelte 5 compliant - base paragraph styling
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<p class="mb-4 leading-relaxed text-zinc-400">
	{@render children()}
</p>
