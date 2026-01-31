import type { RequestHandler } from './$types'
import { siteConfig } from '$lib/data/site'
import { PUBLIC_BASE_URL } from '$env/static/public'

/**
 * Robots.txt Generator
 * ===================================================
 * Provides crawling directives for search engines
 * Includes AI/LLM crawler support for GEO optimization
 * Points to sitemap and allows all major crawlers
 */

export const GET: RequestHandler = async () => {
	const baseUrl = PUBLIC_BASE_URL || siteConfig.url

	const robotsTxt = `# Codevo Solutions - Robots.txt
# Last updated: ${new Date().toISOString().split('T')[0]}

# Allow all major search engines and AI crawlers
User-agent: *
Allow: /

# Disallow admin/private paths (if any)
Disallow: /api/
Disallow: /_app/

# AI/LLM Crawler specific (GEO Optimization)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (polite crawling)
Crawl-delay: 1
`

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=86400, s-maxage=604800', // 1 day client, 7 days CDN
		},
	})
}
