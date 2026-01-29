import { siteConfig } from '$lib/data/site'

export const generateSchema = () => {
	const schema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': 'https://codevosolutions.com/#organization',
				name: siteConfig.name,
				url: 'https://codevosolutions.com',
				logo: 'https://codevosolutions.com/logo.png',
				description: siteConfig.description,
				sameAs: [siteConfig.links.github, siteConfig.links.instagram],
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Bali',
					addressCountry: 'ID',
				},
				contactPoint: {
					'@type': 'ContactPoint',
					contactType: 'customer support',
					areaServed: 'ID',
					availableLanguage: ['en', 'id'],
				},
			},
			{
				'@type': 'ProfessionalService',
				parentOrganization: { '@id': 'https://codevosolutions.com/#organization' },
				name: 'Codevo Software Lab',
				priceRange: '$$$',
				knowsAbout: ['SaaS Development', 'SvelteKit', 'AI Integration', 'Legacy Modernization'],
			},
		],
	}

	// Return sebagai string JSON yang aman (minified)
	return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}
