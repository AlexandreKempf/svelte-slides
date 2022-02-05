<script>
	import "uno.css";
	import "animate.css";
	import "@unocss/reset/tailwind.css";
	import { setContext, getContext } from "svelte";
	import { writable } from "svelte/store";
	import { swipe } from "svelte-gestures";

	let slidesStore = writable([]);
	let currentIndexStore = writable(0);
	let stepStore = writable(0);

	setContext("slides", slidesStore);
	setContext("currentIndex", currentIndexStore);
	setContext("step", stepStore);

	let currentIndex = getContext("currentIndex");
	let slides = getContext("slides");
	let step = getContext("step");

	const previous = (index) => Math.max(index - 1, 0);
	const next = (index, numElem) => Math.min(index + 1, numElem - 1);
	function handleKeydown(event) {
		const numSlides = $slides.length;
		const maxSteps = $slides[$currentIndex].maxSteps;

		switch (event.key) {
			case "ArrowLeft":
				$currentIndex = previous($currentIndex);
				$step = 0;
				break;

			case "ArrowRight":
				if ($step == maxSteps) {
					$currentIndex = next($currentIndex, numSlides);
					$step = 0;
				} else {
					$step = next($step, maxSteps + 1);
				}
				break;

			case "ArrowUp":
				$step = previous($step);
				break;

			case "ArrowDown":
				$step = next($step, maxSteps + 1);
				break;
		}
	}

	function handleSwipe(event) {
		const numSlides = $slides.length;
		const maxSteps = $slides[$currentIndex].maxSteps;

		switch (event.detail.direction) {
			case "right":
				$currentIndex = previous($currentIndex);
				$step = 0;
				break;

			case "left":
				if ($step == maxSteps) {
					$currentIndex = next($currentIndex, numSlides);
					$step = 0;
				} else {
					$step = next($step, maxSteps + 1);
				}
				break;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<div
	class="min-w-full-screen min-h-screen"
	use:swipe={{ timeframe: 500, minSwipeDistance: 100, touchAction: "pan-y" }}
	on:swipe={handleSwipe}
>
	<slot />
</div>
