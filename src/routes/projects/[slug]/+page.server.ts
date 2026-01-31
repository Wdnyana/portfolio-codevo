import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { getProject } from '$lib/services/sanity'

export const load: PageServerLoad = async ({ params }) => {
	const project = await getProject(params.slug)

	if (!project) {
		error(404, 'Project not found')
	}

	return {
		project,
	}
}
