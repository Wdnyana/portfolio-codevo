import { getServices } from '$lib/services/sanity'

export const load = async () => {
	try {
		const services = await getServices()
		return { services }
	} catch (error) {
		console.error('Error loading services:', error)
		// Return empty array as fallback
		return { services: [] }
	}
}
