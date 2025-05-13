import Cannes from './projects/2023/Cannes';
import Grasse from './projects/2022/Grasse';
import LaColleSurLoup from './projects/2023/LaColleSurLoup';
import LaGaude from './projects/2023/LaGaude';
import LaValetteDuVar from './projects/2024/LaValetteDuVar';
import Lyon from './projects/2023/Lyon';
import Paris from './projects/2022/Paris';
import RueilMalmaisonFille from './projects/2022/RueilMalmaisonFille';
import RueilMalmaisonGarcon from './projects/2022/RueilMalmaisonGarcon';
import RueilMalmaisonSalon from './projects/2024/RueilMalmaisonSalon';
import Normandie from './projects/2024/Normandie';
import Vidauban from './projects/2023/Vidauban';
import Vire from './projects/2023/Vire';

const masonry = [
	{ ratio: '16x9', width: 2 },
	{ ratio: '1x1', width: 1 },
	{ ratio: '9x16', width: 1 },
	{ ratio: '1x1', width: 1 },
	{ ratio: '16x9', width: 1 },
	{ ratio: '16x9', width: 1 }
];

export const PROJECTS = [
	Grasse,
	LaValetteDuVar,
	Vidauban,
	RueilMalmaisonSalon,
	LaGaude,
	Cannes,
	Vire,
	Normandie,
	RueilMalmaisonGarcon,
	Lyon,
	RueilMalmaisonFille,
	Paris,
	LaColleSurLoup
].map((project, index) => ({
	...project,
	image: {
		...project.image,
		...masonry[index % masonry.length]
	},
	images: project.images.map((image, index) => ({
		...image,
		...masonry[index % masonry.length]
	}))
}));
