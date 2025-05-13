<script>
	import classNames from 'classnames';
	import Fa from 'svelte-fa';
	import networks from '$lib/content/networks';

	let className = null;
	export { className as class };
	export let color = null;
</script>

<div class={classNames('d-flex justify-content-center', className)}>
	{#each networks as item}
		<a
			class={classNames('mx-1', { [`text-${color}`]: color })}
			href={item.href}
			rel="external noopener noreferrer"
			target="_blank"
		>
			<Fa class="" icon={item.icon} size="2x" />
		</a>
	{/each}
</div>
