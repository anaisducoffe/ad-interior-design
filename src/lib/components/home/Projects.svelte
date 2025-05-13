<script>
	import { PROJECTS } from '$lib/content/projects';
	import Header from '$lib/components/Header.svelte';
	import Masonry from '$lib/components/masonry/Masonry.svelte';
	import MasonryItem from '$lib/components/masonry/MasonryItem.svelte';
	import Title from './ProjectsTitle.svx';

	const MAX_DESKTOP = 5;
	const MAX_MOBILE = 3;

	$: images = PROJECTS.slice(0, MAX_DESKTOP).map(({ id, image, titleRaw }, index) => ({
		...image,
		class: index >= MAX_MOBILE ? 'd-none d-lg-block' : null,
		href: `/projets/${id}`,
		titleRaw
	}));
</script>

<div class="container">
	<Header>
		<Title />
	</Header>
	<Masonry {images}>
		<MasonryItem bgColor="primary">
			<a
				class="align-items-center btn btn-lg btn-primary border-0 bg-gradient d-flex lh-1 justify-content-center rounded-0"
				href="/projets"
			>
				Découvrez toutes les ambiances
			</a>
		</MasonryItem>
	</Masonry>
</div>
