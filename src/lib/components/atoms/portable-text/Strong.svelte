<script lang="ts">
	/**
	 * Strong (Bold) Component
	 * Svelte 5 compliant - renders bold text in white
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<strong class="font-semibold text-white">
	{@render children()}
</strong>
