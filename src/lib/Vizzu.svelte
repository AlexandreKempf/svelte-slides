<script>
	import Vizzu from "https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js?client";
	import { onMount } from "svelte";
	import { tap } from "svelte-gestures";
	import { getContext } from "svelte";

	export let id = "figure_1";
	export let options = [];

	let vizzuStep = getContext("vizzuStep");

	let Chart;
	onMount(() => {
		Chart = new Vizzu(id);
	});

	$: Chart && options[$vizzuStep](Chart);
</script>

<div
	{id}
	class={$$props.class}
	use:tap={{ timeframe: 500 }}
	on:tap={(e) => ($vizzuStep = Math.min($vizzuStep + 1, options.length - 1))}
/>
