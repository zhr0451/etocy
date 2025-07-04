// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightBlogPlugin from 'starlight-blog';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://etocy.info',
  integrations: [
      starlight({
        sidebar: [
          { label: 'Dungeons & Dragons', link: '/' },
          { label: 'Другие системы', link: '/'}
        ],
          social: [
            { icon: 'telegram', label: 'telegram', href: 'https://codeberg.org/knut' },
          ],
          plugins: [
              starlightThemeRapide(),
              starlightBlogPlugin(),

          ],
          title: 'K20',
          description: 'Сайт семьи етосу',
          customCss: [
              '/src/styles/global.css'
          ],
          logo: {
              src: '/src/assets/logo.svg',
          },
      })
	],

  vite: {
    plugins: [tailwindcss()]
  }
})