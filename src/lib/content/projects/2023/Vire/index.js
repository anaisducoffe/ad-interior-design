import image0 from './images/0.png?enhanced&w=1280';
import image1 from './images/1.png?enhanced&w=1280';
import image2 from './images/2.png?enhanced&w=1280';
import image3 from './images/3.png?enhanced&w=1280';
import image4 from './images/4.png?enhanced&w=1280';
import image5 from './images/5.png?enhanced&w=1280';
import description from './Description.svx';
import title from './Title.svx';

export default {
	color: 'vire',
	date: 'Juillet 2023',
	description,
	id: 'vire',
	image: { src: image0 },
	images: [
		{ src: image5 },
		{ src: image2 },
		{ src: image1 },
		{ src: image4 },
		{ class: 'd-none d-lg-block', shadow: 'none' },
		{ src: image3 }
	],
	location: 'Viré',
	price: 3500,
	service: 'etude-decorative',
	title,
	titleRaw: "Une maison de vacances en Bourgogne"
};
