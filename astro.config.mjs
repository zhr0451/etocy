// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightBlogPlugin from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
				starlightBlogPlugin()

			],
			title: 'K20',
			description: 'Сайт семьи етосу',

			logo: {
				src: '/src/assets/logo.svg',
			},
		})
	]
})