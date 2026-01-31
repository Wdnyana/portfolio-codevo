import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { getPost } from '$lib/services/sanity'

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPost(params.slug)

	if (!post) {
		error(404, 'Post not found')
	}

	return {
		post,
	}
}
