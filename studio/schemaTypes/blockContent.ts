import { defineType, defineArrayMember } from 'sanity'

/**
 * Shared Block Content Schema
 * Reusable rich text content with formatting, links, and code blocks
 */
export default defineType({
	name: 'blockContent',
	title: 'Block Content',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'block',
			// Styles
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			// Marks
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Code', value: 'code' },
					{ title: 'Underline', value: 'underline' },
					{ title: 'Strike', value: 'strike-through' },
				],
				annotations: [
					{
						name: 'link',
						type: 'object',
						title: 'URL',
						fields: [
							{
								name: 'href',
								type: 'url',
								title: 'URL',
								validation: (Rule) =>
									Rule.uri({
										scheme: ['http', 'https', 'mailto', 'tel'],
									}),
							},
						],
					},
				],
			},
		}),
		// Code block
		defineArrayMember({
			type: 'code',
			title: 'Code Block',
			options: {
				language: 'typescript',
				languageAlternatives: [
					{ title: 'JavaScript', value: 'javascript' },
					{ title: 'TypeScript', value: 'typescript' },
					{ title: 'Python', value: 'python' },
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
					{ title: 'JSON', value: 'json' },
					{ title: 'Bash', value: 'bash' },
				],
			},
		}),
		// Image
		defineArrayMember({
			type: 'image',
			title: 'Image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessibility',
					validation: (Rule) => Rule.required(),
				},
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
				},
			],
		}),
	],
})
