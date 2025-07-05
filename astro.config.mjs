// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlogPlugin from 'starlight-blog';
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://etocy.info',
  integrations: [
      starlight({
        defaultLocale: 'root',
        locales: {
          root: {
            label: 'Русский',
            lang: 'ru'
          }
        },
        sidebar: [
          { 
            label: 'Dungeons & Dragons', 
            autogenerate: {directory: 'Dungeons & Dragons'} 
          },
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