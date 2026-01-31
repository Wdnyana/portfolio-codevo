<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import type { PortableTextBlock } from '@portabletext/types'
	import Heading from './portable-text/Heading.svelte'
	import Normal from './portable-text/Normal.svelte'
	import Blockquote from './portable-text/Blockquote.svelte'
	import CustomImage from './portable-text/CustomImage.svelte'
	import Link from './portable-text/Link.svelte'
	import Strong from './portable-text/Strong.svelte'
	import Em from './portable-text/Em.svelte'
	import Code from './portable-text/Code.svelte'

	export let value: PortableTextBlock[]

	const components = {
		block: {
			h1: Heading,
			h2: Heading,
			h3: Heading,
			h4: Heading,
			h5: Heading,
			h6: Heading,
			normal: Normal,
			blockquote: Blockquote,
		},
		marks: {
			strong: Strong,
			em: Em,
			code: Code,
			link: Link,
		},
		types: {
			image: CustomImage,
		},
	}
</script>

<div class="prose max-w-none prose-invert">
	<PortableText {value} {components} />
</div>
