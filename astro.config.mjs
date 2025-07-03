// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'K20',
			logo: {
				src: '/home/zhrr/etocy/src/assets/logo.svg',
			},
			social: [{ icon: 'telegram', label: 'telegram', href: 'https://t.me/no_roleplaying' }],
			sidebar: [
				{
					label: 'Главная страница в разработке',
					items: [
						// Each item here is one entry in the navigation menu.
					],
				},
			],
		}),
	],
});
