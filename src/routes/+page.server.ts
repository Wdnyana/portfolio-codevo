import { getServices } from '$lib/services/sanity'

export const load = async () => {
	// Fetch all services from Sanity
	const allServices = await getServices()

	// Define the selected services in the desired order for Home page Bento Grid
	// Items at index 0 and 3 will be wide (md:col-span-2)
	// Items at index 1 and 2 will be normal (md:col-span-1)
	const selectedServiceTitles = [
		'Custom Digital Infrastructure', // Index 0 - Wide (md:col-span-2)
		'Rapid MVP Launch', // Index 1 - Normal
		'System Modernization', // Index 2 - Normal
		'AI Automation', // Index 3 - Wide (md:col-span-2)
	]

	// Filter and sort services based on the selected order
	const homeServices = selectedServiceTitles
		.map((title) => allServices.find((service) => service.title === title))
		.filter((service) => service !== undefined) // Remove any undefined (in case service not found)

	return {
		homeServices,
	}
}
