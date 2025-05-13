import src from './image.png?enhanced&w=960';
import long from './LongDescription.svx';
import short from './ShortDescription.svx';
import title from './Title.svx';

export default {
	description: { long, short },
	id: 'etude-decorative',
	image: {
		src,
		rounded: true
	},
	items: [
		{
			title: 'Une visite de 2h à domicile',
			subtitle:
				"Afin d'établir un cahier des charges du projet et connaitre vos goûts et votre budget."
		},
		{
			title: "Planche d'ambiance",
			subtitle: "Pour illustrer l'esprit du projet : les couleurs, les matières…"
		},
		{
			title: 'Une vue 2D générale du projet',
			subtitle:
				"Pour permettre de visualiser la disposition des différents éléments et la circulation dans l'espace."
		},
		{
			title: 'Des images réalistes Full HD',
			subtitle: 'Pour se projeter et comprendre le projet facilement.'
		},
		{
			title: 'Liste shopping mobilier et déco',
			subtitle: "Vous aurez toutes les références, ils ne restera plus qu'à acheter."
		},
		{
			title: 'Étude éclairage et liste luminaires'
		},
		{
			title: 'Références matériaux et calepinage(s)',
			subtitle:
				'Si besoin je peux vous transmettre les recommendations fournisseurs ou vous conseiller des artisans.'
		}
	],
	price: {
		factor: 48,
		min: 480
	},
	title,
	titleRaw: 'Étude décorative'
};
