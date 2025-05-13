import { SERVICES } from './services';

export default [
	{
		href: '/',
		label: 'Accueil'
	},
	{
		href: '/projets',
		label: 'Projets'
	},
	{
		href: '/prestations',
		label: 'Prestations',
		options: SERVICES.map(({ id, title }) => ({
			label: title,
			href: `/prestations#${id}`
		}))
	},
	{
		href: '/la-decoratrice',
		label: 'La décoratrice'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];
