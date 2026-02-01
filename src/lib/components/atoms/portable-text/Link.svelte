<script lang="ts">
	/**
	 * Link Component
	 * Svelte 5 compliant - external links with hover effects
	 */
	import type { Snippet } from 'svelte'

	interface Props {
		href: string
		children: Snippet
	}

	let { href, children }: Props = $props()

	// Check if link is external - using $derived() for reactivity
	let isExternal = $derived(href.startsWith('http') || href.startsWith('//'))
</script>

<a
	{href}
	class="text-quark-beam underline decoration-quark-beam/30 underline-offset-2 transition-colors hover:text-quark-beam/80 hover:decoration-quark-beam/60"
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
>
	{@render children()}
</a>
