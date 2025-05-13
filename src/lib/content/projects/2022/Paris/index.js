import image0 from './images/0.png?enhanced&w=1280';
import image1 from './images/1.png?enhanced&w=1280';
import image2 from './images/2.png?enhanced&w=1280';
import image3 from './images/3.png?enhanced&w=1280';
import image4 from './images/4.png?enhanced&w=1280';
import image5 from './images/5.png?enhanced&w=1280';
import image6 from './images/6.png?enhanced&w=1280';
import description from './Description.svx';
import title from './Title.svx';

export default {
	color: 'paris',
	date: 'Avril 2022',
	description,
	id: 'paris',
	image: { src: image0 },
	images: [
		{ src: image1 },
		{ src: image2 },
		{ src: image3 },
		{ src: image4 },
		{ src: image5 },
		{ src: image6 }
	],
	location: 'Région parisienne',
	price: 10000,
	service: 'etude-decorative',
	title,
	titleRaw: 'Une projection avant un achat immobilier'
};
