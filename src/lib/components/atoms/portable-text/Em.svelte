<script lang="ts">
	/**
	 * Em (Italic/Emphasis) Component
	 * Svelte 5 compliant - renders italic text
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<em class="italic text-zinc-300">
	{@render children()}
</em>
