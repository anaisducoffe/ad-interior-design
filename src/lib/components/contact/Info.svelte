<script>
	import Fa from 'svelte-fa';
	import Header from '$lib/components/Header.svelte';
	import contacts from '$lib/content/contacts';
	import TextAfter from './InfoTextAfter.svx';
	import TextBefore from './InfoTextBefore.svx';
	import Title from './InfoTitle.svx';
</script>

<div class="container my-5">
	<Header>
		<Title />
	</Header>
	<div class="row text-center">
		<div class="col-12">
			<TextBefore />
			<div class="align-items-center d-flex flex-column fs-3 my-4">
				{#each contacts as item}
					<div class="d-flex my-2">
						<a href={item.href} target="_blank" rel="external noopener noreferrer">
							<Fa class="" icon={item.icon} />
							{item.label}
						</a>
					</div>
				{/each}
			</div>
			<TextAfter />
		</div>
	</div>
</div>
