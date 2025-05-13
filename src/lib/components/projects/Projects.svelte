<script>
	import Header from '$lib/components/Header.svelte';
	import Masonry from '$lib/components/masonry/Masonry.svelte';
	import { PROJECTS } from '$lib/content/projects';
	import Title from './Title.svx';

	$: images = PROJECTS.map(({ color, id, image, title, titleRaw }) => ({
		...image,
		bgColor: color,
		color: 'white',
		href: `/projets/${id}`,
		title,
		titleRaw
	}));
</script>

<div class="container">
	<Header>
		<Title />
	</Header>
	<Masonry {images} legend />
</div>
