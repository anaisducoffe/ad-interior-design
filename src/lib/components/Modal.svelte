<script>
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	let bsModal;
	let Modal;
	let modalEl;

	onMount(async () => {
		Modal = (await import('bootstrap/js/dist/modal')).default;
	});

	$: _cleanup = (() => {
		if (_cleanup) {
			_cleanup();
		}

		if (browser && Modal && modalEl) {
			bsModal = new Modal(modalEl);
		}

		return () => {
			if (bsModal) {
				bsModal.dispose();
				bsModal = null;
			}
		};
	})();

	onDestroy(() => {
		if (_cleanup) {
			_cleanup();
		}
	});

	export function show() {
		if (bsModal) {
			bsModal.show();
		}
	}
</script>

<div bind:this={modalEl} class="fade modal">
	<div class="modal-dialog modal-dialog-centered modal-xl">
		<div class="modal-content">
			<slot />
		</div>
	</div>
</div>
