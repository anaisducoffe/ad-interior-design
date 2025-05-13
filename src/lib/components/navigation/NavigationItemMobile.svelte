<script>
	import NavigationItem from './NavigationItem.svelte';

	export let item;
	export let onclick;
	let className = 'fs-3 text-center';
</script>

{#if item.options}
	{#each item.options as option}
		<NavigationItem class={className} item={option} {onclick} />
	{/each}
{:else}
	<NavigationItem class={className} {item} {onclick} />
{/if}
