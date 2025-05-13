<script>
	import classNames from 'classnames';

	export let bgColor = 'white';
	let className = null;
	export { className as class };
	export let color = 'black';
	export let ratio = '16x9';
	export let shadow = 'sm';
	export let width = 1;
</script>

<div class={classNames('grid-item', className, { [`grid-item--width${width}`]: width > 1 })}>
	<div class="bg-{bgColor} bg-gradient overflow-hidden rounded shadow-{shadow} text-{color}">
		<div class="ratio ratio-{ratio}">
			<slot />
		</div>
		<slot name="legend" />
	</div>
</div>
