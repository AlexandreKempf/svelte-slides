<script>
	import { setContext, getContext } from "svelte";
	import { writable } from "svelte/store";
	import { swipe } from "svelte-gestures";

	let slidesStore = writable([]);
	let currentIndexStore = writable(0);

	setContext("slides", slidesStore);
	setContext("currentIndex", currentIndexStore);

	let currentIndex = getContext("currentIndex");
	let slides = getContext("slides");

	const nextSlide = (index) => Math.max(index - 1, 0);
	const previousSlide = (index, numSlides) =>
		Math.min(index + 1, numSlides - 1);
	function handleKeydown(event) {
		$currentIndex =
			event.key == "ArrowLeft" ? nextSlide($currentIndex) : $currentIndex;
		$currentIndex =
			event.key == "ArrowDown" ? nextSlide($currentIndex) : $currentIndex;
		$currentIndex =
			event.key == "ArrowRight"
				? previousSlide($currentIndex, $slides.length)
				: $currentIndex;
		$currentIndex =
			event.key == "ArrowUp"
				? previousSlide($currentIndex, $slides.length)
				: $currentIndex;
	}
	function handleSwipe(event) {
		$currentIndex =
			event.detail.direction == "right"
				? nextSlide($currentIndex)
				: $currentIndex;
		$currentIndex =
			event.detail.direction == "left"
				? previousSlide($currentIndex, $slides.length)
				: $currentIndex;
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<div
	class="min-w-full-screen min-h-screen"
	use:swipe={{ timeframe: 500, minSwipeDistance: 100 }}
	on:swipe={handleSwipe}
>
	<slot />
</div>
