<script>
	import Fa from 'svelte-fa';

	export let icon;
	export let onclick;
</script>

<button class="navbar-toggler" on:click={onclick} type="button">
	<Fa class="" {icon} size="lg" />
</button>
