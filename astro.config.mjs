// import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [metaTags()],
})
