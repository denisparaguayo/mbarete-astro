// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from './src/data/siteConfig.js';

// https://astro.build/config
export default defineConfig({
	site: siteConfig.url,
});
