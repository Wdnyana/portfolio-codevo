import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '6p5pqa7a'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
	name: 'default',
	title: 'Codevo Portfolio',

	projectId,
	dataset,

	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						S.listItem().title('Projects').child(S.documentTypeList('project').title('Projects')),
						S.listItem().title('Blog Posts').child(S.documentTypeList('post').title('Blog Posts')),
						S.listItem().title('Services').child(S.documentTypeList('service').title('Services')),
					]),
		}),
		visionTool(),
		codeInput(),
	],

	schema: {
		types: schemaTypes,
	},
})
