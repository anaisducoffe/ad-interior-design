<script>
	import Image from '$lib/components/Image.svelte';
	import src from './image.png?enhanced&w=1400';
	import Text from './Text.svx';
</script>

<div class="hero position-relative ratio shadow-sm">
	<Image class="h-100 object-fit-cover w-100" {src} />
	<div style="background-color: rgba(0,0,0,0.4);">
		<div class="container h-100">
			<div class="hero-row position-relative py-2 row">
				<div class="col-12">
					<div class="align-items-center d-flex h-100 justify-content-center text-center" style="color:#f4f4f4;">
						<Text />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		--bs-aspect-ratio: 100%;

		@include media-breakpoint-up(md) {
			--bs-aspect-ratio: calc(100% * (1 / (16 / 9)));
		}

		.hero-row {
			min-height: 50%;
		}
	}
</style>
