import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import externalLinks from 'rehype-external-links';

export default {
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			rehypePlugins: [
				[
					externalLinks,
					{
						rel: ['external', 'noopener', 'noreferrer'],
						target: '_blank'
					}
				]
			]
		})
	]
};
