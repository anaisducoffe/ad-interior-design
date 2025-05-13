<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import '$lib/styles/app.scss';

	export let data;
	$: ({ analyticsId } = data);
	$: ({ description, title } = $page.data);

	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', analyticsId);
	});
</script>

<svelte:head>
	<meta name="description" content={description} />
	<title>{title}</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id={analyticsId}"></script>
</svelte:head>

<div class="mx-auto root">
	<Navigation />
	<slot />
	<Footer />
</div>

<style lang="scss">
	.root {
		max-width: var(--bs-breakpoint-xxl);
	}
</style>
