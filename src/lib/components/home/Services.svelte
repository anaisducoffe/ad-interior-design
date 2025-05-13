<script>
	import { SERVICES } from '$lib/content/services';
	import Header from '$lib/components/Header.svelte';
	import Image from '$lib/components/Image.svelte';
	import Title from './ServicesTitle.svx';
</script>

<div class="container">
	<Header>
		<Title />
	</Header>
	<div class="my-5 row">
		{#each SERVICES as item}
			<div class="col-12 col-md-6 col-xl-3 mb-4">
				<a href="/prestations#{item.id}">
					<div class="card h-100 overflow-hidden shadow-sm">
						<div class="bg-light bg-gradient ratio ratio-16x9">
							<Image alt={item.titleRaw} class="h-100 object-fit-cover w-100" src={item.image.src} />
						</div>
						<div class="card-body">
							<h5 class="card-title text-center">
								<svelte:component this={item.title} />
							</h5>
							<svelte:component this={item.description.short} />
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>
