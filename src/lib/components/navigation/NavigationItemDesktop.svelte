<script>
	import { onDestroy, onMount } from 'svelte';
	import classNames from 'classnames';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import NavigationItem from './NavigationItem.svelte';

	export let item;
	export let onclick;
	let bsDropdown;
	let Dropdown;
	let dropdownEl;
	let dropdownTimeout;
	$: href = `${$page.url.pathname}${$page.url.hash}`;

	onMount(async () => {
		Dropdown = (await import('bootstrap/js/dist/dropdown')).default;
	});

	$: _cleanup = (() => {
    if (_cleanup) {
      _cleanup();
    }
		
		if (browser && Dropdown && dropdownEl) {
			bsDropdown = new Dropdown(dropdownEl);
		}

    return () => {
			if (bsDropdown) {
				bsDropdown.dispose();
				bsDropdown = null;
			}
		};
  })();

  onDestroy(() => {
    if (_cleanup) {
      _cleanup();
    }
  });

	function hide() {
		if (bsDropdown) {
			bsDropdown.hide();
		}
	}

	function hideWithDelay() {
		clearTimeout(dropdownTimeout);
		dropdownTimeout = setTimeout(hide, 400);
	}

	function show() {
		clearTimeout(dropdownTimeout);
		if (bsDropdown) {
			bsDropdown.show();
		}
	}
</script>

{#if item.options}
	<li
		bind:this={dropdownEl}
		class="dropdown nav-item"
		on:mouseenter={show}
		on:mouseleave={hideWithDelay}
	>
		<button
			class={classNames('dropdown-toggle nav-link', {
				active: item.href === '/' ? item.href === href : href.startsWith(item.href)
			})}
			on:click={show}
			type="button"
		>
			{item.label}
		</button>
		<ul class="dropdown-menu dropdown-menu-end">
			{#each item.options as option}
				<li>
					<a
						class={classNames('dropdown-item', { active: option.href === href })}
						href={option.href}
						on:click={hide}
					>
						<svelte:component this={option.label} />
					</a>
				</li>
			{/each}
		</ul>
	</li>
{:else}
	<NavigationItem {item} {onclick} />
{/if}
