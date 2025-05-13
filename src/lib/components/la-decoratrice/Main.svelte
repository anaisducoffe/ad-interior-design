<script>
	import Image from '$lib/components/Image.svelte';
	import src from './image.png?enhanced&w=540';
	import Text from './Text.svx';
</script>

<div class="container">
	<div class="mt-5 row">
		<div class="col-12 col-lg-5 mb-4 offset-lg-2">
			<div class="align-items-center d-flex flex-column h-100 justify-content-center text-center">
				<Text />
			</div>
		</div>
		<div class="col-12 col-lg-3">
			<div class="image mx-auto ratio ratio-1x1">
				<Image alt="Anaïs Ducoffe" class="h-100 object-fit-cover w-100" {src} />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.image {
		max-height: 256px;
		max-width: 256px;
	}
</style>
