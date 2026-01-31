import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'service',
	title: 'Service',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().max(100),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 4,
			validation: (Rule) => Rule.required().max(300),
		}),
		defineField({
			name: 'iconName',
			title: 'Icon Name',
			type: 'string',
			description: 'Select a Lucide icon for this service',
			options: {
				list: [
					{ title: 'Code', value: 'Code' },
					{ title: 'Database', value: 'Database' },
					{ title: 'CPU', value: 'Cpu' },
					{ title: 'Zap (Lightning)', value: 'Zap' },
					{ title: 'Rocket', value: 'Rocket' },
					{ title: 'Handshake', value: 'Handshake' },
					{ title: 'Lock (Security)', value: 'Lock' },
					{ title: 'Cloud', value: 'Cloud' },
				],
				layout: 'dropdown',
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'iconName',
		},
	},
})
