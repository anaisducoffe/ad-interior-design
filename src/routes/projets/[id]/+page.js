import { error } from '@sveltejs/kit';
import { PROJECTS } from '$lib/content/projects.js';
import { SERVICES_TITLES_RAW } from '$lib/content/services.js';

export function load({ params }) {
	const index = PROJECTS.findIndex(({ id }) => id === params.id);
	const item = PROJECTS[index];
	if (item) {
		let prevIndex = index + 1;
		if (prevIndex >= PROJECTS.length) {
			prevIndex = 0;
		}

		let nextIndex = index - 1;
		if (nextIndex < 0) {
			nextIndex = PROJECTS.length - 1;
		}

		return {
			description: `${item.titleRaw} - Localisation : ${item.location} - Prestation : ${SERVICES_TITLES_RAW[item.service]}`,
			title: `${item.titleRaw} - Anaïs Ducoffe Interior Design`,
			item,
			nextItem: PROJECTS[nextIndex],
			prevItem: PROJECTS[prevIndex]
		};
	}

	error(404, 'Not Found');
}
