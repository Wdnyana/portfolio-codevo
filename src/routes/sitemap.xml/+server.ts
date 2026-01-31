import type { RequestHandler } from './$types'
import { getProjects, getPosts } from '$lib/services/sanity'
import { siteConfig } from '$lib/data/site'
import { PUBLIC_BASE_URL } from '$env/static/public'

/**
 * Dynamic Sitemap Generator
 * ===================================================
 * Automatically generates sitemap.xml with all static and dynamic pages
 * Fetches slugs from Sanity CMS for projects and blog posts
 * Includes proper lastmod, priority, and changefreq for SEO optimization
 */

const baseUrl = PUBLIC_BASE_URL || siteConfig.url

// Static pages with SEO metadata
const staticPages = [
	{ url: '', priority: '1.0', changefreq: 'daily' },
	{ url: '/projects', priority: '0.9', changefreq: 'weekly' },
	{ url: '/blog', priority: '0.9', changefreq: 'daily' },
	{ url: '/services', priority: '0.8', changefreq: 'monthly' },
	{ url: '/contact', priority: '0.7', changefreq: 'monthly' },
]

export const GET: RequestHandler = async () => {
	try {
		// Fetch dynamic content from Sanity
		const [projects, posts] = await Promise.all([getProjects(), getPosts()])

		// Generate sitemap XML with extended schema
		const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${generateStaticPages()}
${generateProjectPages(projects)}
${generateBlogPages(posts)}
</urlset>`

		return new Response(sitemap.trim(), {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=3600, s-maxage=7200', // 1h client, 2h CDN
			},
		})
	} catch (error) {
		console.error('Sitemap generation error:', error)

		// Fallback sitemap with static pages only
		const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateStaticPages()}
</urlset>`

		return new Response(fallbackSitemap.trim(), {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
				'Cache-Control': 'public, max-age=300', // 5 min cache on error
			},
		})
	}
}

/**
 * Generate static pages XML entries
 */
function generateStaticPages(): string {
	const now = new Date().toISOString()
	return staticPages
		.map(
			(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
		)
		.join('\n')
}

/**
 * Generate project pages XML entries
 */
function generateProjectPages(
	projects: Array<{ slug: { current: string }; _updatedAt?: string }>,
): string {
	if (projects.length === 0) return ''

	return projects
		.map(
			(project) => `  <url>
    <loc>${baseUrl}/projects/${project.slug.current}</loc>
    <lastmod>${project._updatedAt || new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
		)
		.join('\n')
}

/**
 * Generate blog pages XML entries
 */
function generateBlogPages(
	posts: Array<{ slug: { current: string }; publishedAt: string; _updatedAt?: string }>,
): string {
	if (posts.length === 0) return ''

	return posts
		.map(
			(post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <lastmod>${post._updatedAt || post.publishedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
		)
		.join('\n')
}
