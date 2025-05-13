import * as sitemap from 'super-sitemap';
import { PROJECTS } from '$lib/content/projects';

export const GET = async () => {
	return await sitemap.response({
		origin: 'https://www.ad-interior-design.fr',
		paramValues: {
			'/projets/[id]': PROJECTS.map(({ id }) => id)
		}
	});
};
