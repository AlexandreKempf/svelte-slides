<script>
	import { getContext } from "svelte";

	export let maxSteps = 0;
	// Fill the context store when we add a slide
	let slides = getContext("slides");
	let currentIndex = getContext("currentIndex");
	let step = getContext("step");
	let slideIndex = $slides.length;
	$slides = [...$slides, { idx: slideIndex, maxSteps: maxSteps }];

	// Only display the current slide
	$: hidden = $currentIndex != slideIndex;

	let Slide;

	const addClassAtStep = (container, step) => {
		const children = container.getElementsByTagName("*");
		const prefix = "step-" + step + ":";
		for (var i = 0; i < children.length; i++) {
			const child = children[i];
			const classList = child.classList;
			for (var j = 0; j < classList.length; j++) {
				if (classList[j].startsWith("step")) {
					if (step == 0) {
						//reset the slide to step-0
						const classToRemove = classList[j]
							.split(":")
							.slice(1)
							.join("");
						child.classList.remove(classToRemove);
					} else if (classList[j].startsWith(prefix)) {
						const classToAdd = classList[j].replace(prefix, "");
						child.classList.add(classToAdd);
					}
				}
			}
		}
	};

	$: Slide && $currentIndex == slideIndex && addClassAtStep(Slide, $step); // add class at a specific step or reset if step==0
</script>

<div class:hidden bind:this={Slide} class="overflow-x-hidden">
	<slot />
</div>
