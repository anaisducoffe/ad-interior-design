<script>
	import Logo from './logo.svg?raw';

	export let color;
	export let onclick = null;
</script>

<a class="align-items-center d-flex navbar-brand" on:click={onclick} href="/">
	<div class="icon">{@html Logo}</div>
	<div class="align-items-center d-flex flex-column text-uppercase">
		<h4 class="mb-0">Anaïs Ducoffe</h4>
		<h6 class="mb-0 text-{color}">Interior Design</h6>
	</div>
</a>

<style lang="scss">
	.icon {
		height: 48px;
		margin-right: var(--bs-navbar-brand-margin-end);
		width: 48px;
	}
</style>
