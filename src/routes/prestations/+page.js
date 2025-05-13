import { SERVICES } from '$lib/content/services';

export function load() {
	return {
		description: `En savoir plus sur mes prestations : ${SERVICES.map(({ titleRaw }) => titleRaw).join(', ')}`,
		title: 'Mes prestations - Anaïs Ducoffe Interior Design'
	};
}
