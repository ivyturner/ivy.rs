// @ts-check
import { defineConfig, envField } from 'astro/config';

import rehypeSlug from 'rehype-slug'
import conf from "./src/site.config"
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: "https://ivy.rs",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'text',
            value: '↝',
          },
          properties: {
            className: ['ml-2 no-underline text-light-pu/0 hover:text-light-pu/100 dark:text-dark-pu/0 dark:hover:text-dark-pu/100'],
          },
        },
      ],
    ]
  },

  env: {
    schema: {
      ANALYTICS: envField.boolean({ context: 'server', access: "public", default: false, optional: true }),
      ANALYTICS_SOURCE: envField.enum({ values: ["none", "umami", "goat"], context: 'server', access: 'public', default: "none", optional: true }),

      UMAMI_HOST: envField.string({ context: 'server', access: "public", optional: true }),
      UMAMI_CODE: envField.string({ context: 'server', access: "secret", optional: true }),

      GOAT_HOST: envField.string({ context: 'server', access: "public", optional: true }),

      GHOST_API_HOST: envField.string({ context: 'server', access: "public", optional: true }),
      GHOST_API_KEY: envField.string({ context: 'server', access: "secret", optional: true }),

      MINIFLUX_HOST: envField.string({ context: 'server', access: "public", optional: true }),
      MINIFLUX_KEY: envField.string({ context: 'server', access: "secret", optional: true }),

      WF_KEY: envField.string({ context: 'server', access: "secret", optional: true }),

      LFM_API_KEY: envField.string({ context: 'server', access: "secret", optional: true }),

      GH_PAT: envField.string({ context: 'server', access: "secret", optional: true })
    }
  },

  redirects: conf.settings.redirects
});