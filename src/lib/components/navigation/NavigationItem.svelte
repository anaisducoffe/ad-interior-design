<script>
	import classNames from 'classnames';
	import { page } from '$app/stores';

	let className = '';
	export { className as class };
	export let item;
	export let onclick;

	$: href = `${$page.url.pathname}${$page.url.hash}`;
</script>

<li class={classNames('nav-item', className)}>
	<a
		class={classNames('nav-link', {
			active: item.href === '/' ? item.href === href : href.startsWith(item.href)
		})}
		on:click={onclick}
		href={item.href}
	>
		{#if typeof item.label === 'function'}
			<svelte:component this={item.label} />
		{:else}
			{item.label}
		{/if}
	</a>
</li>
