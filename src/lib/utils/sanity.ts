import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public'

/**
 * Sanity Image Helper Utilities
 * --------------------------------------------------
 * Lightweight helper for Sanity image URL generation and manipulation.
 * Uses CDN for optimal performance.
 */

// Lightweight client for image URL building only
const imageClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: true, // Always use CDN for images (better performance)
	apiVersion: '2024-03-01',
})

const builder = imageUrlBuilder(imageClient)

/**
 * Generate optimized image URLs from Sanity image sources
 * @param source - Sanity image source (asset reference or image object)
 * @returns Image URL builder with auto-format
 *
 * @example
 * ```ts
 * // Basic usage
 * urlFor(project.coverImage).width(800).url()
 *
 * // With responsive sizes
 * urlFor(post.mainImage).width(1200).height(630).fit('crop').url()
 *
 * // Auto-format picks best format (WebP, AVIF, etc)
 * urlFor(image).auto('format').url()
 * ```
 */
export function urlFor(source: SanityImageSource) {
	return builder.image(source).auto('format')
}

/**
 * Extract image dimensions from Sanity asset reference
 * @param source - Sanity image source
 * @returns Object with width, height, and aspectRatio, or null if not found
 *
 * Pattern: image-<uuid>-<width>x<height>-<format>
 */
export function getImageDimensions(
	source: SanityImageSource,
): { width: number; height: number; aspectRatio: number } | null {
	let ref: string | null = null

	// Extract asset reference from various source formats
	if (typeof source === 'string') {
		ref = source
	} else if (source && typeof source === 'object' && 'asset' in source) {
		const asset = source.asset
		if (asset && typeof asset === 'object') {
			ref =
				'_ref' in asset && typeof asset._ref === 'string'
					? asset._ref
					: '_id' in asset && typeof asset._id === 'string'
						? asset._id
						: null
		}
	}

	if (!ref || typeof ref !== 'string') return null

	// Parse dimensions from asset ID
	const parts = ref.split('-')
	if (parts.length < 3 || parts[0] !== 'image') return null

	const dimensions = parts[parts.length - 2]
	const [widthStr, heightStr] = dimensions.split('x')
	const width = parseInt(widthStr, 10)
	const height = parseInt(heightStr, 10)

	if (isNaN(width) || isNaN(height)) return null

	return {
		width,
		height,
		aspectRatio: width / height,
	}
}
