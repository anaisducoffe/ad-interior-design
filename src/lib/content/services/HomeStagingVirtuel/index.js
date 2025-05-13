import src from './image.png?enhanced&w=960';
import long from './LongDescription.svx';
import short from './ShortDescription.svx';
import title from './Title.svx';

export default {
	description: { long, short },
	id: 'home-staging-virtuel',
	image: {
		src,
		rounded: true
	},
	items: [
		{
			title: 'Recueil des informations nécessaires',
			subtitle: 'Plan(s) avec côtes, images du lieu…'
		},
		{
			title: 'Une vue 2D du projet'
		},
		{
			title: '2 visuels 3D réalistes (Full HD) par pièce'
		},
		{
			title: 'Estimation des coûts',
			subtitle: '(mobilier, papier peint, carrelage… hors main d’œuvre)'
		},
		{
			title: 'Dossier envoyé par mail'
		}
	],
	price: {
		factor: 24,
		min: 240
	},
	title,
	titleRaw: 'Home staging virtuel'
};
