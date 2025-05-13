<script>
	export let image = null;
	export let onclick = null;
</script>

{#if image.href}
	<a href={image.href}><slot /></a>
{:else if onclick}
	<button class="border-0 btn p-0" on:click={() => onclick(image)} type="button">
		<slot />
	</button>
{:else}
	<slot />
{/if}
