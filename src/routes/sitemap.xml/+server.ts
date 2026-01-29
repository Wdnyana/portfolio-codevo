import { siteConfig } from '$lib/data/site'
import { projects } from '$lib/data/projects'
import type { RequestHandler } from './$types'

export const prerender = true

const pages = ['', 'services', 'projects', 'blog', 'contact', 'privacy', 'terms']

export const GET: RequestHandler = async () => {
	const siteUrl = siteConfig.url

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map((page) => {
			return `
  <url>
    <loc>${siteUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? 1.0 : 0.8}</priority>
  </url>`
		})
		.join('')}

  ${projects
		.map((project) => {
			return `
  <url>
    <loc>${siteUrl}/projects/${project.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
		})
		.join('')}
</urlset>`

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600',
		},
	})
}
