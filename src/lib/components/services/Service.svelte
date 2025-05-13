<script>
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';

	export let item;
	export let index;

	let odd = index % 2 !== 0;
</script>

<div class="service" id={item.id}>
	<Background enabled={odd}>
		<div class="container">
			<Header>
				<svelte:component this={item.title} />
			</Header>
			<slot />
		</div>
	</Background>
</div>

<style lang="scss">
	.service {
		margin-top: -$navbar-height;
		padding-top: $navbar-height;
	}
</style>
