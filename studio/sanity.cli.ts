import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: '6p5pqa7a',
		dataset: 'production',
	},
	deployment: {
		autoUpdates: true,
		appId: 'kffvln57heztwjx2w99sgq30',
	},
})
