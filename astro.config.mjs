// import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [metaTags(), relativeLinks()]
});