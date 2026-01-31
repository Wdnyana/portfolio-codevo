import { getProjects } from '$lib/services/sanity'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const projects = await getProjects()
	return { projects }
}
