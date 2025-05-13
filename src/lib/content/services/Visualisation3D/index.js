import src from './image.png?enhanced&w=960';
import long from './LongDescription.svx';
import short from './ShortDescription.svx';
import title from './Title.svx';

export default {
	description: { long, short },
	id: 'visualisation-3d',
	image: { src },
	items: [
		{
			title: 'Recueil des informations nécessaires',
			subtitle: 'Si vous fournissez un modèle 3D sketchup, le prix sera réduit.'
		},
		{
			title: '2 à 4 visuels 3D réalistes (Full HD) par pièce',
			subtitle: 'En fonction de la superficie et de besoins particuliers.'
		},
		{
			title: 'Images envoyées par mail'
		}
	],
	price: {
		factor: 12,
		min: 120
	},
	title,
	titleRaw: 'Visualisation 3D'
};
