import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(100),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			validation: (Rule) => Rule.max(150),
		}),
		defineField({
			name: 'projectType',
			title: 'Project Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Client Project', value: 'client-work' },
					{ title: 'Internal Venture / SaaS', value: 'internal-product' },
				],
				layout: 'radio',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'url',
			title: 'Live URL',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['http', 'https'],
				}),
		}),
		defineField({
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: [
					{ title: 'Live', value: 'live' },
					{ title: 'Beta', value: 'beta' },
					{ title: 'Archived', value: 'archived' },
				],
				layout: 'dropdown',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'year',
			title: 'Year',
			type: 'string',
			validation: (Rule) => Rule.required().regex(/^\d{4}$/),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 4,
			validation: (Rule) => Rule.max(500),
		}),
		defineField({
			name: 'techStack',
			title: 'Tech Stack',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					validation: (Rule) => Rule.required(),
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'blockContent',
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'year',
			media: 'coverImage',
		},
	},
})
