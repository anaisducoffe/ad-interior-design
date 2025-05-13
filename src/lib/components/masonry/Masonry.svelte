<script>
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Image from '$lib/components/Image.svelte';
	import Link from '$lib/components/Link.svelte';
	import MasonryItem from './MasonryItem.svelte';

	export let legend = false;
	export let images;
	export let onclick = null;
	let Masonry;
	let masonry;
	let masonryEl;

	onMount(async () => {
		Masonry = (await import('masonry-layout')).default;
	});

	$: _cleanup = (() => {
		if (_cleanup) {
			_cleanup();
		}

		if (browser && Masonry && masonryEl) {
			masonry = new Masonry(masonryEl, {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer',
				itemSelector: '.grid-item',
				percentPosition: true,
				transitionDuration: 0
			});
		}

		return () => {
			if (masonry) {
				masonry.destroy();
				masonry = null;
			}
		};
	})();

	onDestroy(() => {
		if (_cleanup) {
			_cleanup();
		}
	});
</script>

<div bind:this={masonryEl} class="grid my-5">
	<div class="grid-sizer"></div>
	<div class="gutter-sizer"></div>
	{#each images as image}
		<MasonryItem
			bgColor={image.bgColor}
			class={image.class}
			color={image.color}
			ratio={image.ratio}
			shadow={image.shadow}
			width={image.width}
		>
			{#if image.src}
				<Link {image} {onclick}>
					<Image
						alt={image.titleRaw}
						color={image.color}
						class="h-100 object-fit-cover w-100"
						src={image.src}
					/>
				</Link>
			{/if}
			<div slot="legend">
				{#if legend}
					<div class="lh-sm p-2 text-center text-light">
						<svelte:component this={image.title} />
					</div>
				{/if}
			</div>
		</MasonryItem>
	{/each}
	<slot />
</div>

<style lang="scss">
	@use 'sass:map';

	.grid {
		--gutter-size: #{map.get($spacers, 2)};

		@include media-breakpoint-up(lg) {
			--gutter-size: #{map.get($spacers, 4)};
		}

		:global(.grid-item) {
			margin-bottom: var(--gutter-size);
		}

		.grid-sizer,
		:global(.grid-item) {
			width: calc((100% - var(--gutter-size)) / 2);

			@include media-breakpoint-up(lg) {
				width: calc((100% - var(--gutter-size) * 3) / 4);
			}
		}

		:global(.grid-item--width2) {
			width: 100%;

			@include media-breakpoint-up(lg) {
				width: calc(50% - var(--gutter-size) / 2);
			}
		}

		.gutter-sizer {
			width: var(--gutter-size);
		}
	}
</style>
