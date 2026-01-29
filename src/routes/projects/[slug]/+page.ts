import { error } from '@sveltejs/kit'
import { projects } from '$lib/data/projects'
import type { PageLoad, EntryGenerator } from './$types'

// 1. Fungsi Load: Mengambil data berdasarkan URL slug
export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug)
	if (!project) throw error(404, 'Project not found')
	return { project }
}

// 2. Fungsi Entries: Memberi tahu adapter-static halaman apa saja yang harus di-build
export const entries: EntryGenerator = () => {
	return projects.map((project) => ({ slug: project.slug }))
}
