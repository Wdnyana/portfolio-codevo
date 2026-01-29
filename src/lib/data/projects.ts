export interface Project {
	slug: string
	title: string
	subtitle: string
	description: string
	techStack: string[]
	year: string
}

export const projects: Project[] = [
	{
		slug: 'kriswa',
		title: 'Kriswa SaaS',
		subtitle: 'Digital Invitation Platform',
		description:
			'A high-performance SaaS for creating digital wedding invitations. Features include real-time guest management and WhatsApp integration.',
		techStack: ['SvelteKit', 'Supabase', 'Tailwind'],
		year: '2025',
	},
	{
		slug: 'codevo-cli',
		title: 'Codevo AI CLI',
		subtitle: 'Terminal-based AI Assistant',
		description:
			'A developer tool to interact with Gemini AI directly from the terminal for code refactoring and generation.',
		techStack: ['Node.js', 'Gemini API', 'TypeScript'],
		year: '2025',
	},
]
