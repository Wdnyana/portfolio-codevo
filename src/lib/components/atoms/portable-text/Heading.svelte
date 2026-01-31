<script lang="ts">
	/**
	 * Heading Component
	 * Svelte 5 compliant - handles H2, H3 with proper hierarchy
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		level: 'h2' | 'h3' | 'h4'
		children: Snippet
	}

	let { level, children }: Props = $props()

	// Style mapping based on heading level
	const styles = {
		h2: 'mb-6 mt-12 font-display text-3xl font-bold text-white',
		h3: 'mb-4 mt-8 font-display text-2xl font-semibold text-white',
		h4: 'mb-3 mt-6 font-display text-xl font-semibold text-zinc-100',
	}
</script>

<svelte:element this={level} class={styles[level]}>
	{@render children()}
</svelte:element>
