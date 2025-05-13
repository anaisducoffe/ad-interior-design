<script>
	import { SERVICES } from '$lib/content/services';
	import Block from './Block.svelte';
	import Service from './Service.svelte';
	import Calculator from './Calculator.svelte';
</script>

{#each SERVICES as item, index}
	<Service {item} {index}>
		<div class="my-5 row">
			<div class="col-12 col-lg-8 offset-lg-2 text-center">
				<svelte:component this={item.description.long} />
			</div>
		</div>
		<Block alt={item.titleRaw} items={item.items} rounded={item.image.rounded} src={item.image.src} />
		<div class="my-5 row">
			<div class="col-12">
				<div class="align-items-center d-flex h-100 justify-content-center">
					<div class="bg-light bg-gradient border p-3 rounded text-center shadow-sm">
						{#if item.price.value}
							<h4 class="mb-0">Tarif : {item.price.value}€</h4>
							<div>(payable à la fin du rendez-vous)</div>
						{:else}
							<Calculator factor={item.price.factor} priceMin={item.price.min} />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</Service>
{/each}
