<script lang="ts">
	import { urlFor } from '$lib/utils/sanity'

	let { value } = $props<{ value: any }>()
</script>

{#if value?.asset}
	<figure class="my-8">
		<img
			src={urlFor(value).width(800).url()}
			alt={value.alt || 'Article Image'}
			width="800"
			height="600"
			class="h-auto w-full rounded-lg border border-white/10"
			loading="lazy"
		/>
		{#if value.caption}
			<figcaption class="mt-2 text-center text-sm text-zinc-500 italic">
				{value.caption}
			</figcaption>
		{/if}
	</figure>
{/if}
