import image0 from './images/0.png?enhanced&w=1280';
import image1 from './images/1.png?enhanced&w=1280';
import image2 from './images/2.png?enhanced&w=1280';
import image3 from './images/3.png?enhanced&w=1280';
import image4 from './images/4.png?enhanced&w=1280';
import image5 from './images/5.png?enhanced&w=1280';
import description from './Description.svx';
import title from './Title.svx';

export default {
	color: 'vidauban',
	date: 'Décembre 2023',
	description,
	id: 'vidauban',
	image: { src: image0 },
	images: [
		{ src: image1 },
		{ src: image3 },
		{ src: image4 },
		{ src: image5 },
		{ class: 'd-none d-lg-block', shadow: 'none' },
		{ src: image2 }
	],
	location: 'Vidauban',
	price: 4600,
	service: 'etude-decorative',
	title,
	titleRaw: "La douceur du bohème et l'élégance du contemporain"
};
