<script>
	export let factor;
	export let max = 100_000;
	export let min = 0;
	export let priceMin;
	export let value = 10;
	let price = value * factor;

	$: {
		if (value < min) {
			value = min;
		} else if (value > max) {
			value = max;
		}

		price = Math.max(priceMin, value * factor);
	}
</script>

<h4 class="mb-0">Tarif : {factor}€/m²</h4>
<div>(montant minimum : {priceMin}€)</div>
<div class="mt-4">
	<div class="input-group mb-2">
		<span class="input-group-text">Votre surface</span>
		<input class="form-control" {max} {min} type="number" bind:value />
		<span class="input-group-text">m²</span>
	</div>
	<h4 class="mb-0">Votre tarif : {price}€</h4>
</div>
