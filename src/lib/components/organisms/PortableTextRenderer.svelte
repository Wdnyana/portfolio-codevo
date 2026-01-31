<script lang="ts">
	/**
	 * Portable Text Renderer Component
	 * ============================================
	 * Wrapper for @portabletext/svelte with custom styled components
	 * Maps Sanity Portable Text blocks to our custom Svelte 5 components
	 */
	import { PortableText } from '@portabletext/svelte'
	import type { PortableTextBlock } from '@portabletext/types'
	import { PortableTextComponents } from '$lib'

	interface Props {
		value: PortableTextBlock[]
	}

	let { value }: Props = $props()

	// Component mapping for Portable Text
	const components = {
		block: {
			// Headings with proper level prop
			h2: (props: any) => PortableTextComponents.Heading({ level: 'h2', children: props.children }),
			h3: (props: any) => PortableTextComponents.Heading({ level: 'h3', children: props.children }),
			h4: (props: any) => PortableTextComponents.Heading({ level: 'h4', children: props.children }),
			
			// Regular blocks
			normal: PortableTextComponents.Normal,
			blockquote: PortableTextComponents.Blockquote,
		},
		marks: {
			strong: PortableTextComponents.Strong,
			em: PortableTextComponents.Em,
			code: PortableTextComponents.Code,
			link: PortableTextComponents.Link,
		},
		types: {
			// Custom image handling could be added here if needed
		},
	}
</script>

<div class="portable-text-content">
	<PortableText {value} {components} />
</div>

<style>
	.portable-text-content :global(h2) {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
	}

	.portable-text-content :global(h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.portable-text-content :global(h4) {
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.portable-text-content :global(p) {
		margin-bottom: 1rem;
	}

	.portable-text-content :global(ul),
	.portable-text-content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
		color: rgb(161 161 170); /* zinc-400 */
	}

	.portable-text-content :global(li) {
		margin-bottom: 0.5rem;
		line-height: 1.75;
	}

	.portable-text-content :global(blockquote) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.portable-text-content :global(img) {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.portable-text-content :global(pre) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		padding: 1rem;
		background-color: rgb(39 39 42 / 0.5); /* zinc-800/50 */
		border-radius: 0.5rem;
		overflow-x: auto;
		border: 1px solid rgb(63 63 70 / 0.5); /* zinc-700/50 */
	}

	.portable-text-content :global(code) {
		font-family: 'JetBrains Mono', monospace;
	}
</style>
