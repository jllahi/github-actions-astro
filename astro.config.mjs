import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'

import relativeLinks from 'astro-relative-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://jllahi.github.io',
  base: '/github-actions-astro',
  trailingSlash: 'always',
  integrations: [metaTags(), relativeLinks()],
})
