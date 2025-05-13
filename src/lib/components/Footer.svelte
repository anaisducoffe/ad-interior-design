<script>
	import SocialNetworks from './SocialNetworks.svelte';
	import FooterText from './FooterText.svx';
</script>

<div class="border-top container text-center">
	<div class="footer-row my-5 row">
		<div class="col-12">
			<div class="mb-4">
				<h5>Restons en contact</h5>
				<SocialNetworks />
			</div>
			<div class="fs-n1">
				<FooterText />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@include media-breakpoint-down(lg) {
		.footer-row {
			margin-bottom: 80px !important;
		}
	}
</style>
