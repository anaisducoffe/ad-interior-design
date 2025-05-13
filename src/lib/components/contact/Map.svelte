<script>
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
	import Title from './MapTitle.svx';
</script>

<Background>
	<div class="container">
		<Header>
			<Title />
		</Header>
		<div class="my-5">
			<iframe
				allowfullscreen=""
				class="border-0"
				height="512"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11557.445997915656!2d7.10364045!3d43.5990142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x840a45af248566df%3A0x39f0e58275e0cb4!2sAna%C3%AFs%20Ducoffe%20Interior%20Design!5e0!3m2!1sfr!2sfr!4v1705235663833!5m2!1sfr!2sfr"
				title="Où nous trouver ?"
				width="100%"
			/>
		</div>
	</div>
</Background>
