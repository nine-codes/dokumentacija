// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Dokumentacija',
      defaultLocale: 'ba',
      locales: {
        ba: {
          label: 'Bosanski',
          lang: 'ba',
        },
      },
      customCss: ['./src/styles/theme.css'],
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        { label: 'Blog', link: '/blog/' },
        {
          label: 'CSS',
          collapsed: true,
          autogenerate: { directory: 'css' },
        },
        {
          label: 'HTML',
          collapsed: true,
          autogenerate: { directory: 'html' },
        },
      ],
    }),
  ],
});
