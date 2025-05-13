<script>
	import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import experiences from '$lib/content/experiences';
	import Experience from './Experience.svelte';
	import Title from './Title.svx';
</script>

<div class="container my-5">
	<Header>
		<Title />
	</Header>
	{#each experiences as item, index}
		<Experience {index}>
			<div class="align-items-center d-flex flex-column h-100 justify-content-center" slot="text">
				<svelte:component this={item.description} />
			</div>
			<div class="align-items-center d-flex h-100 justify-content-center" slot="image">
				<div class="image ratio ratio-1x1 shadow-{item.shadow ?? 'sm'}">
					<Image alt={item.label} class="h-100 object-fit-cover w-100" src={item.src} />
				</div>
			</div>
		</Experience>
	{/each}
</div>

<style lang="scss">
	.image {
		max-height: 256px;
		max-width: 256px;
	}
</style>
