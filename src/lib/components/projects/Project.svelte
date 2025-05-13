<script>
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Carousel from '$lib/components/Carousel.svelte';
	import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import Link from '$lib/components/Link.svelte';
	import Masonry from '$lib/components/masonry/Masonry.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ProjectDetail from '$lib/components/projects/ProjectDetail.svelte';
	import { SERVICES_TITLES } from '$lib/content/services';

	export let item;
	export let nextItem;
	export let prevItem;
	let carousel;
	let modal;

	$: images = item.images.map((image) => ({
		...image,
		color: item.color
	}));

	$: items = [item.image, ...images.filter(({ src }) => src)];

	function onclick(image) {
		carousel.to(items.findIndex(({ src }) => src === image.src) ?? 0);
		modal.show();
	}
</script>

<div class="container">
	<Header color={item.color}>
		<svelte:component this={item.title} />
	</Header>
	<div class="my-5 row">
		<div class="col-12 col-lg-10 offset-lg-1">
			<div class="bg-{item.color} bg-gradient overflow-hidden rounded text-light shadow-sm">
				<div class="d-flex flex-column flex-lg-row">
					<div class="image ratio w-100 w-lg-75">
						<Link image={item.image} {onclick}>
							<Image
								alt={item.titleRaw}
								color="light"
								class="h-100 object-fit-cover w-100"
								src={item.image.src}
							/>
						</Link>
					</div>
					<div class="d-flex flex-row flex-lg-column flex-fill flex-wrap pt-3 pt-lg-4 ps-3 ps-lg-4">
						<ProjectDetail>
							<div>Budget</div>
							<h5>{item.price}€</h5>
						</ProjectDetail>
						<ProjectDetail>
							<div>Localisation</div>
							<h5>{item.location}</h5>
						</ProjectDetail>
						<ProjectDetail>
							<div>Date</div>
							<h5>{item.date}</h5>
						</ProjectDetail>
						<ProjectDetail>
							<div>Prestation</div>
							<h5>
								<svelte:component this={SERVICES_TITLES[item.service]} />
							</h5>
						</ProjectDetail>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="my-5 row">
		<div class="col-12 col-lg-8 description offset-lg-2">
			<svelte:component this={item.description} />
		</div>
	</div>
	{#key images}
		<Masonry {images} {onclick} />
	{/key}
	<div class="my-5 row">
		<div class="col-12">
			<div class="d-flex">
				{#if prevItem}
					<a class="align-items-center d-flex" href="/projets/{prevItem.id}">
						<Fa class="me-2" icon={faChevronLeft} />
						Précédent
					</a>
				{/if}
				<div class="flex-fill"></div>
				{#if nextItem}
					<a class="align-items-center d-flex" href="/projets/{nextItem.id}">
						Suivant
						<Fa class="ms-2" icon={faChevronRight} />
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
<Modal bind:this={modal}>
	<Carousel bind:this={carousel} {items} />
</Modal>

<style lang="scss">
	.description {
		:global(h3) {
			margin-bottom: 2rem;
			margin-top: 2rem;
			text-align: center;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.image {
		--bs-aspect-ratio: 100%;

		@include media-breakpoint-up(lg) {
			--bs-aspect-ratio: calc(100% * (1 / (16 / 9)));
		}
	}
</style>
