import { siteConfig } from '$lib/data/site'
import { PUBLIC_BASE_URL } from '$env/static/public'

type OrganizationSchema = {
	'@type': 'Organization'
	url: string
	name: string
	logo: string
	contactPoint: {
		'@type': 'ContactPoint'
		contactType: string
		areaServed: string
		availableLanguage: string[]
	}
	sameAs: string[]
}

type ArticleSchema = {
	'@type': 'BlogPosting'
	headline: string
	description: string
	image: string
	datePublished: string
	author: {
		'@type': 'Organization'
		name: string
	}
}

type WebsiteSchema = {
	'@type': 'WebSite'
	url: string
	name: string
	potentialAction: {
		'@type': 'SearchAction'
		target: {
			'@type': 'EntryPoint'
			urlTemplate: string
		}
		'query-input': string
	}
}

const baseUrl = PUBLIC_BASE_URL || siteConfig.url

export const organizationSchema = (): OrganizationSchema => ({
	'@type': 'Organization',
	url: baseUrl,
	name: siteConfig.name,
	logo: `${baseUrl}/logo.png`, // Assuming logo exists at root or handled via asset
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'customer support',
		areaServed: 'ID',
		availableLanguage: ['en', 'id'],
	},
	sameAs: [siteConfig.links.github, siteConfig.links.instagram],
})

export const websiteSchema = (): WebsiteSchema => ({
	'@type': 'WebSite',
	url: baseUrl,
	name: siteConfig.name,
	potentialAction: {
		'@type': 'SearchAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: `${baseUrl}/search?q={search_term_string}`,
		},
		'query-input': 'required name=search_term_string',
	},
})

export const serviceSchema = () => ({
	'@type': 'ProfessionalService',
	parentOrganization: {
		'@type': 'Organization',
		name: siteConfig.name,
		url: baseUrl,
	},
	name: 'Codevo Software Lab',
	description: 'High-end custom software development and modernization services.',
	priceRange: '$$$',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Bali',
		addressCountry: 'ID',
	},
	knowsAbout: ['SaaS Development', 'SvelteKit', 'AI Integration', 'Legacy Modernization'],
})

export const articleSchema = (post: {
	title: string
	description?: string
	excerpt?: string
	image?: string
	publishedAt: string
}): ArticleSchema => ({
	'@type': 'BlogPosting',
	headline: post.title,
	description: post.description || post.excerpt || '',
	image: post.image || `${baseUrl}/og-image.jpg`, // Fallback
	datePublished: post.publishedAt,
	author: {
		'@type': 'Organization',
		name: siteConfig.name,
	},
})

export const generateSchemas = (schemas: object[]) => {
	const graph = {
		'@context': 'https://schema.org',
		'@graph': schemas,
	}
	return `<script type="application/ld+json">${JSON.stringify(graph)}</script>`
}
