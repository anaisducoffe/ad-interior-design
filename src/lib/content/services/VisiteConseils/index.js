import src from './image.png?enhanced&w=960';
import short from './ShortDescription.svx';
import title from './Title.svx';

export default {
	description: { long: short, short },
	id: 'visite-conseils',
	image: { src },
	items: [
		{
			title: 'Une visite de 2h à domicile'
		},
		{
			title: 'Sur une problématique précise',
			subtitle: '(ex : choix d’une couleur, changer un sol, conseils éclairage, circulation…)'
		},
		{
			title: 'Livrable : un compte rendu de notre échange',
			subtitle: '24h max. après la visite'
		}
	],
	price: {
		value: 240
	},
	title,
	titleRaw: 'Visite conseils'
};
