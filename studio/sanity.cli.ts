import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '6p5pqa7a'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
	api: {
		projectId,
		dataset,
	},
	autoUpdates: true,
})
