<script>
	import Project from '$lib/components/projects/Project.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';

	export let data;
	$: ({ item, nextItem, prevItem } = data);
</script>

<Project {item} {nextItem} {prevItem} />
<FloatingActionButton />
