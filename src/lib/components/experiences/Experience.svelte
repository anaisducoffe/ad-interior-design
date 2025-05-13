<script>
	export let index;
</script>

<div class="mb-5 row">
	{#if index % 2 === 0}
		<div class="col-12 col-lg-5 offset-lg-2 order-1 order-lg-0">
			<slot name="text" />
		</div>
		<div class="col-12 col-lg-3 mb-4 mb-lg-0 order-0 order-lg-1">
			<slot name="image" />
		</div>
	{:else}
		<div class="col-12 col-lg-3 offset-lg-2 mb-4 mb-lg-0">
			<slot name="image" />
		</div>
		<div class="col-12 col-lg-5">
			<slot name="text" />
		</div>
	{/if}
</div>
