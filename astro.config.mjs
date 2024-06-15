import metaTags from 'astro-meta-tags'
import relativeLinks from 'astro-relative-links'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jllahi.github.io',
  base: '/github-actions-astro',
  trailingSlash: 'always',
  integrations: [metaTags(), relativeLinks()],
})
