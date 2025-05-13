<script>
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import classNames from 'classnames';
	import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { browser } from '$app/environment';
	import Image from '$lib/components/Image.svelte';

	export let items;
	let activeIndex;
	let bsCarousel;
	let Carousel;
	let carouselEl;

	onMount(async () => {
		Carousel = (await import('bootstrap/js/dist/carousel')).default;
	});

	$: _cleanup = (() => {
		if (_cleanup) {
			_cleanup();
		}

		if (browser && Carousel && carouselEl) {
			bsCarousel = new Carousel(carouselEl, { keyboard: false });
		}

		return () => {
			if (bsCarousel) {
				bsCarousel.dispose();
				bsCarousel = null;
			}
		};
	})();

	onDestroy(() => {
		if (_cleanup) {
			_cleanup();
		}
	});

	$: if (items) {
		activeIndex = 0;
	}

	function slid(event) {
		activeIndex = event.to;
	}

	export function next() {
		if (bsCarousel) {
			bsCarousel.next();
		}
	}

	export function prev() {
		if (bsCarousel) {
			bsCarousel.prev();
		}
	}

	export function to(index) {
		if (bsCarousel) {
			bsCarousel.to(index);
		}
	}

	function handleKeydown(event) {
		if (!carouselEl || !carouselEl.offsetParent) {
			return;
		}
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			prev();
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			next();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="bg-black overflow-hidden rounded shadow-sm">
	<div bind:this={carouselEl} class="carousel slide" on:slid.bs.carousel={slid}>
		<div class="carousel-indicators mx-0">
			{#each items as _, index}
				<div class="carousel-indicator m-1 overflow-hidden">
					<button
						class={classNames('border-0 d-block h-100 m-0 w-100', {
							active: index === activeIndex
						})}
						on:click={() => to(index)}
						data-bs-target
						type="button"
					>
					</button>
				</div>
			{/each}
		</div>
		<div class="carousel-inner">
			{#each items as item, index}
				<div class={classNames('carousel-item', { active: index === activeIndex })}>
					<div class="image ratio ratio-16x9">
						<Image
							alt={item.title}
							class="h-100 object-fit-cover object-fit-lg-contain w-100"
							src={item.src}
						/>
					</div>
				</div>
			{/each}
		</div>
		<button class="carousel-control-prev" on:click={prev} type="button">
			<Fa class="" icon={faChevronLeft} size="2x" />
		</button>
		<button class="carousel-control-next" on:click={next} type="button">
			<Fa class="" icon={faChevronRight} size="2x" />
		</button>
	</div>
</div>

<style lang="scss">
	.carousel-indicator {
		border-radius: 50%;
		height: 0.5em;
		width: 0.5em;
	}
</style>
