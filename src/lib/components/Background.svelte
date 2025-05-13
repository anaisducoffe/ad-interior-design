<script>
	let className = null;
	export let enabled = true;
	export { className as class };
</script>

<div
	class={className}
	class:bg-section={enabled}
	class:bg-gradient={enabled}
	class:overflow-hidden={enabled}
	class:shadow-sm={enabled}
>
	<slot />
</div>
