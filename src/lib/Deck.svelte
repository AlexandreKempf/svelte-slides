<script>
	import "uno.css";
	import "animate.css";
	import "@unocss/reset/tailwind.css";
	import { setContext, getContext } from "svelte";
	import { writable } from "svelte/store";
	import { tap } from "svelte-gestures";

	let slidesStore = writable([]);
	let currentIndexStore = writable(0);
	let stepStore = writable(0);
	let vizzuStepStore = writable(0);
	let maxStepsStore = writable(0);

	setContext("slides", slidesStore);
	setContext("currentIndex", currentIndexStore);
	setContext("step", stepStore);
	setContext("maxSteps", maxStepsStore);
	setContext("vizzuStep", vizzuStepStore);

	let currentIndex = getContext("currentIndex");
	let slides = getContext("slides");
	let step = getContext("step");
	let maxSteps = getContext("maxSteps");
	let vizzuStep = getContext("vizzuStep");

	let yScroll;

	const previous = (index) => Math.max(index - 1, 0);
	const next = (index, numElem) => Math.min(index + 1, numElem - 1);
	function handleKeydown(event) {
		const numSlides = $slides.length;

		switch (event.key) {
			case "ArrowLeft":
				$currentIndex = previous($currentIndex);
				$step = 0;
				// $vizzuStep = 0;
				break;

			case "ArrowRight":
				if ($step == $maxSteps) {
					$currentIndex = next($currentIndex, numSlides);
					$step = 0;
					// $vizzuStep = 0;
				} else {
					$step = next($step, $maxSteps + 1);
				}
				break;

			case "ArrowUp":
				$step = previous($step);
				break;

			case "ArrowDown":
				$step = next($step, $maxSteps + 1);
				break;
		}
	}

	let ScreenWidth;
	function handleTap(event) {
		const numSlides = $slides.length;
		const xTap = event.detail.x;

		if (xTap < ScreenWidth / 4) {
			$currentIndex = previous($currentIndex);
			$step = 0;
			// $vizzuStep = 0;
		} else if (xTap > (3 * ScreenWidth) / 4) {
			if ($step == $maxSteps) {
				$currentIndex = next($currentIndex, numSlides);
				$step = 0;
				// $vizzuStep = 0;
			} else {
				$step = next($step, $maxSteps + 1);
			}
		}
	}

	$: {
		// reset yScroll on slide change
		yScroll = 0;
		$currentIndex;
	}
</script>

<svelte:window on:keydown={handleKeydown} bind:scrollY={yScroll} />

<div
	class="min-w-full-screen min-h-screen"
	use:tap={{ timeframe: 500 }}
	on:tap={handleTap}
	bind:clientWidth={ScreenWidth}
>
	<slot />
</div>
