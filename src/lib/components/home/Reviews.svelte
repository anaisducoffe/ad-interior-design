<script>
	import { faExternalLinkAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import reviews from '$lib/content/reviews';
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import Title from './ReviewsTitle.svx';
</script>

<Background>
	<div class="container">
		<Header>
			<Fa class="" icon={faQuoteRight} />
			<Title />
		</Header>
		<div class="my-5 row">
			<div class="col-12 col-sm-8 offset-sm-2">
				{#each reviews as item}
					<figure class="text-center">
						<blockquote class="blockquote">
							<svelte:component this={item.message} />
						</blockquote>
						<figcaption class="blockquote-footer">
							{item.name}
						</figcaption>
					</figure>
				{/each}
				<div class="text-center">
					<a
						class="align-items-center btn btn-primary d-inline-flex"
						href="https://www.google.com/localservices/prolist?spp=Cg0vZy8xMXE0ZzU1NnNw&src=2&slp=UhUIARIREg8iDS9nLzExcTRnNTU2c3A#ts=3"
						rel="external noopener noreferrer"
						target="_blank"
					>
						Voir tous les avis
						<Fa class="ms-2" icon={faExternalLinkAlt} />
					</a>
				</div>
			</div>
		</div>
	</div>
</Background>
