<script>
	import { getContext } from "svelte";

	// Fill the context store when we add a slide
	let slides = getContext("slides");
	let currentIndex = getContext("currentIndex");
	let slideIndex = $slides.length;
	$slides = [...$slides, slideIndex];

	// Only display the current slide
	$: hidden = $currentIndex != slideIndex;
</script>

<div class:hidden>
	<slot />
</div>
