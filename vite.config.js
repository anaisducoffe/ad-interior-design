import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/lib/styles/variables.scss" as *;',
			}
		}
	},
	plugins: [enhancedImages(), sveltekit()]
});
