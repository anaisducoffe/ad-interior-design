<script>
	import { faSpinner } from '@fortawesome/free-solid-svg-icons';
	import classNames from 'classnames';
	import Fa from 'svelte-fa';

	let className;
	let image;
	let loaded;
	let prevSrc;
	let srcInner;
	export let alt = '';
	export let color = 'dark';
	export { className as class };
	export { srcInner as src };

	$: if (prevSrc !== srcInner) {
		loaded = false;
		prevSrc = srcInner;
	} else if (image) {
		loaded = image.complete;
	}

	function onload() {
		loaded = true;
	}
</script>

<enhanced:img
	bind:this={image}
	{alt}
	class={classNames(className, `text-${color}`, { 'visually-hidden': !loaded })}
	on:load={onload}
	src={srcInner}
/>
{#if !loaded}
	<div
		class="align-items-center d-flex h-100 justify-content-center position-absolute top-0 start-0 w-100"
	>
		<Fa class="text-{color}" icon={faSpinner} size="2x" pulse />
	</div>
{/if}
