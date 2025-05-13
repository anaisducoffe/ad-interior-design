<script>
	import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
	import classNames from 'classnames';
	import Fa from 'svelte-fa';
	import Image from '$lib/components/Image.svelte';

	export let alt;
	export let items;
	export let rounded = false;
	export let src;
</script>

<div class="row">
	<div class="col-12 col-lg-3 mb-4 mb-lg-0 order-lg-1">
		<div class="align-items-center d-flex h-100 justify-content-center">
			<div
				class={classNames('image ratio ratio-1x1', {
					'overflow-hidden rounded shadow-sm': rounded
				})}
			>
				<Image {alt} class="h-100 object-fit-cover w-100" {src} />
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-5 offset-lg-2 order-lg-0">
		<div class="d-flex flex-column h-100 justify-content-center">
			{#each items as item, index}
				<div class={classNames({ 'mb-4': index < items.length - 1 })}>
					<h5 class="mb-0">
						<Fa class="text-primary" icon={faCaretRight} />
						{item.title}
					</h5>
					{#if item.subtitle}
						<div>{item.subtitle}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.image {
		max-height: 256px;
		max-width: 256px;
	}
</style>
