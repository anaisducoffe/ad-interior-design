<script>
	import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import SocialNetworks from '$lib/components/SocialNetworks.svelte';
	import navigation from '$lib/content/navigation';
	import NavigationBrand from './NavigationBrand.svelte';
	import NavigationItemDesktop from './NavigationItemDesktop.svelte';
	import NavigationItemMobile from './NavigationItemMobile.svelte';
	import NavigationToggler from './NavigationToggler.svelte';

	let bsOffcanvas;
	let Offcanvas;
	let offcanvasEl;

	onMount(async () => {
		Offcanvas = (await import('bootstrap/js/dist/offcanvas')).default;
	});

	$: {
		if (browser && Offcanvas && offcanvasEl) {
			bsOffcanvas = new Offcanvas(offcanvasEl);
		}
	}

	function hide() {
		if (bsOffcanvas) {
			bsOffcanvas.hide();
		}
	}

	function toggle() {
		if (bsOffcanvas) {
			bsOffcanvas.toggle();
		}
	}
</script>

<nav class="bg-light fixed-top navbar navbar-expand-lg shadow-sm">
	<div class="container-lg">
		<NavigationBrand color="primary" />
		<NavigationToggler icon={faBars} onclick={toggle} />
		<ul class="d-none d-lg-flex ms-auto navbar-nav">
			{#each navigation as item}
				<NavigationItemDesktop {item} onclick={hide} />
			{/each}
		</ul>
	</div>
</nav>
<div bind:this={offcanvasEl} class="bg-primary h-100 offcanvas offcanvas-top" data-bs-theme="dark">
	<nav class="align-items-stretch flex-column h-100 navbar">
		<div class="container-fluid">
			<NavigationBrand color="secondary" onclick={hide} />
			<NavigationToggler icon={faXmark} onclick={toggle} />
		</div>
		<div class="offcanvas-body">
			<div class="d-flex flex-column h-100">
				<div class="align-items-center d-flex flex-fill justify-content-center">
					<ul class="navbar-nav">
						{#each navigation as item}
							<NavigationItemMobile {item} onclick={hide} />
						{/each}
					</ul>
				</div>
				<SocialNetworks class="py-5" />
			</div>
		</div>
	</nav>
</div>
