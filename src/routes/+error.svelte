<script>
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';

	onMount(() => {
		if (!dev) {
			goto('/');
		}
	});
</script>
