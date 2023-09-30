<script>
	import { getContext } from "svelte";

	// Fill the context store when we add a slide
	let slides = getContext("slides");
	let currentIndex = getContext("currentIndex");
	let maxSteps = getContext("maxSteps");
	let step = getContext("step");
	let slideIndex = $slides.length;
	$slides = [...$slides, { idx: slideIndex }];

	// Only display the current slide
	$: hidden = $currentIndex != slideIndex;

	let Slide;

	const updateClassAtStep = (container, step) => {
		// reset the maxSteps for each slide
		$maxSteps = step == 0 ? 0 : $maxSteps;

		const children = container.getElementsByTagName("*");
		const prefixStart = "start-" + step + ":";
		const prefixEnd = "end-" + step + ":";
		for (var i = 0; i < children.length; i++) {
			const child = children[i];
			const copyChild = child.cloneNode(true);
			const classList = copyChild.classList;
			for (var j = 0; j < classList.length; j++) {
				if (classList[j].startsWith("start-")) {
					if (step == 0) {
						//reset the slide to step-0 by removing all start-*: classes added
						const classToRemove = classList[j]
							.split(":")
							.slice(1)
							.join("");
						const stepStart = parseInt(
							classList[j].split(":")[0].split("-")[1]
						);
						// determine the maxSteps for each slide
						$maxSteps =
							stepStart > $maxSteps ? stepStart : $maxSteps;
						// check if the class is removed by an end earlier
						const regex = new RegExp(
							"end-[0-" + stepStart + "]:" + classToRemove
						);
						let isClassRemovedByAnEnd = false;
						for (var k = 0; k < classList.length; k++) {
							if (regex.test(classList[k])) {
								isClassRemovedByAnEnd = true;
							}
						}
						if (!isClassRemovedByAnEnd) {
							child.classList.remove(classToRemove);
						}
					} else if (classList[j].startsWith(prefixStart)) {
						const classToAdd = classList[j].replace(
							prefixStart,
							""
						);

						child.classList.add(classToAdd);
					}
				} else if (classList[j].startsWith("end-")) {
					if (step == 0) {
						//reset the slide to step-0 by adding all end-*: classes removed
						const classToAdd = classList[j]
							.split(":")
							.slice(1)
							.join("");
						const stepEnd = parseInt(
							classList[j].split(":")[0].split("-")[1]
						);
						// determine the maxSteps for each slide
						$maxSteps = stepEnd > $maxSteps ? stepEnd : $maxSteps;

						// check if the class is introduce by an earlier start
						const regex = new RegExp(
							"start-[0-" + stepEnd + "]:" + classToAdd
						);
						let isClassIntroduceByAStart = false;
						for (var k = 0; k < classList.length; k++) {
							if (regex.test(classList[k])) {
								isClassIntroduceByAStart = true;
							}
						}
						if (!isClassIntroduceByAStart) {
							child.classList.add(classToAdd);
						}
					} else if (classList[j].startsWith(prefixEnd)) {
						const classToRemove = classList[j].replace(
							prefixEnd,
							""
						);
						child.classList.remove(classToRemove);
					}
				}
			}
		}
	};

	$: Slide && $currentIndex == slideIndex && updateClassAtStep(Slide, $step); // update class at a specific step or reset if step==0
</script>

<div
	class:hidden
	bind:this={Slide}
	class="overflow-x-hidden lg:overflow-y-hidden"
>
	<slot />
</div>
