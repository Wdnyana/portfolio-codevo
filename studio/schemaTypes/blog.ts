import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'post',
	title: 'Blog Post',
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
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
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
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			rows: 3,
			validation: (Rule) => Rule.max(200),
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Engineering', value: 'Engineering' },
					{ title: 'Business', value: 'Business' },
					{ title: 'Tutorial', value: 'Tutorial' },
					{ title: 'Update', value: 'Update' },
				],
			},
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
			subtitle: 'publishedAt',
		},
	},
})
