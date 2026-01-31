import { createClient } from '@sanity/client'
import groq from 'groq'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public'

/**
 * Sanity Service Layer
 * --------------------------------------------------
 * Handles all data fetching from Sanity CMS with efficient GROQ queries.
 * All functions include error handling to prevent app crashes.
 */

// Validate environment variables
if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error(
		'Missing Sanity environment variables: PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET must be set',
	)
}

// Sanity client configuration
export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // false = fresh data, true = faster/cached
	apiVersion: '2024-03-01',
})

// ========================================
// TypeScript Interfaces
// ========================================

export interface SanityProject {
	_id: string
	title: string
	slug: { current: string }
	subtitle?: string
	projectType: 'client-work' | 'internal-product'
	url?: string
	status: 'live' | 'beta' | 'archived'
	year?: string
	description?: string
	techStack?: string[]
	coverImage?: SanityImageSource
	content?: PortableTextBlock[]
}

export interface SanityPost {
	_id: string
	title: string
	slug: { current: string }
	publishedAt: string
	mainImage?: SanityImageSource
	excerpt?: string
	tags?: string[]
	category?: string[]
	body?: PortableTextBlock[]
}

export interface SanityService {
	_id: string
	title: string
	description?: string
	iconName?: string
}

// ========================================
// Data Fetching Functions
// ========================================

/**
 * Fetch all projects (ordered by year, descending)
 * @returns Array of projects (empty array if error)
 */
export async function getProjects(): Promise<SanityProject[]> {
	const query = groq`*[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    subtitle,
    projectType,
    url,
    status,
    year,
    description,
    techStack,
    coverImage
  }`

	try {
		return await client.fetch<SanityProject[]>(query)
	} catch (error) {
		console.error('Failed to fetch projects:', error)
		return []
	}
}

/**
 * Fetch a single project by slug (includes full content)
 * @param slug - Project slug
 * @returns Single project or null if not found/error
 */
export async function getProject(slug: string): Promise<SanityProject | null> {
	const query = groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    subtitle,
    projectType,
    url,
    status,
    year,
    description,
    techStack,
    coverImage,
    content
  }`

	try {
		return await client.fetch<SanityProject>(query, { slug })
	} catch (error) {
		console.error(`Failed to fetch project with slug "${slug}":`, error)
		return null
	}
}

/**
 * Fetch all blog posts (ordered by published date, descending)
 * @returns Array of posts (empty array if error)
 */
export async function getPosts(): Promise<SanityPost[]> {
	const query = groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    tags,
    category
  }`

	try {
		return await client.fetch<SanityPost[]>(query)
	} catch (error) {
		console.error('Failed to fetch posts:', error)
		return []
	}
}

/**
 * Fetch a single blog post by slug (includes full body content)
 * @param slug - Post slug
 * @returns Single post or null if not found/error
 */
export async function getPost(slug: string): Promise<SanityPost | null> {
	const query = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    tags,
    category,
    body
  }`

	try {
		return await client.fetch<SanityPost>(query, { slug })
	} catch (error) {
		console.error(`Failed to fetch post with slug "${slug}":`, error)
		return null
	}
}

/**
 * Fetch all services
 * @returns Array of services (empty array if error)
 */
export async function getServices(): Promise<SanityService[]> {
	const query = groq`*[_type == "service"] {
    _id,
    title,
    description,
    iconName
  }`

	try {
		return await client.fetch<SanityService[]>(query)
	} catch (error) {
		console.error('Failed to fetch services:', error)
		return []
	}
}
