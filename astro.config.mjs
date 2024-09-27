// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Kodiraj Ba',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        { label: 'Blog', link: '/blog/' },
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Example Guide', slug: 'guides/example' },
        //   ],
        // },
        {
          label: 'CSS',
          autogenerate: { directory: 'css' },
        },
        {
          label: 'HTML',
          autogenerate: { directory: 'html' },
        },
      ],
    }),
  ],
});
