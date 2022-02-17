<script>
	import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";
	import Vizzu from "$lib/Vizzu.svelte";
	import { data } from "https://lib.vizzuhq.com/test/integration/test_data/infinite_data.js?client";
</script>

<Deck>
	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<div
				class="i-openmoji-gem-stone animate__animated animate__flip text-9xl max-w-5/6 mx-auto my-8 text-blue-600"
			/>
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Svelte-Slides is a HTML presentation tool.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Just a collection of slides created with <a
					href="https://svelte.dev/"
					class="text-blue-600 hover:text-neutral-600">Svelte</a
				>
				and
				<a
					href="https://unocss.antfu.me/"
					class="text-blue-600 hover:text-neutral-600">UnoCSS</a
				>.
				<br />
				Life is too short to fight against Powerpoint or Beamer ugly style!
			</p>
			<a
				href="https://github.com/AlexandreKempf/svelte-slides"
				class="font-sans text-center text-lg max-w-4/6 mx-auto mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
				> Check the github <span class="i-akar-icons-github-fill -mt-0.5"/>
			</a>

			<p
				class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Press the right-left key to navigate or tap the right-left side
				of the screen
			</p>
		</div>
	</Slide>

	<Slide>
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
			<div
				class="lg:w-11/24 w-22/24 animate__animated animate__fadeInLeft"
			>
				<img src="14.svg" alt="figure-1" class="rounded-20" />
			</div>
			<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Feature
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Create impactful presentations with animations.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Supports CSS animation out of the box with <a
						href="https://animate.style/"
						class="text-blue-600 hover:text-neutral-600"
						>animate.css</a
					>.
				</p>

				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Use animation freely <br />
					Just add one more class <br />
					Sounds super badass <br />
					But don't forget epilepsy <br />
				</p>
			</div>
		</div>
	</Slide>

	<Slide>
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
			<div class="lg:w-11/24 w-22/24 mb-8">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Feature
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Illustrate your story with images and more.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Add images, SVG or GIF to your presentation.
					<br />
					Even better you can add
					<a
						href="https://lottiefiles.com/"
						class="text-blue-600 hover:text-neutral-600">Lottie</a
					>
					animation.
				</p>
			</div>
			<div class="lg:w-11/24 w-22/24">
				<lottie-player
					src="https://assets9.lottiefiles.com/packages/lf20_rhnmhzwj.json"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-wrap justify-evenly mx-auto max-w-22/24 pt-20">
			<div class="xl:w-11/24 w-22/24">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Feature
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Trigger actions to add content as you speak.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Create awesome transitions for you slides.
				</p>

				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					All you need is to add classes. <br/>
					Here is the recipe:
				</p>
			</div>
			<div class="xl:w-11/24 w-22/24">
				<div
					class="flex flex-wrap justify-evenly items-top mx-auto max-w-22/24"
				>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
					>
						<div
							class="i-openmoji-magnifying-glass-tilted-right
						text-5xl"
						/>
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Find the HTML you want to animate.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							Ctrl-F is your friend.
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
					>
						<div class="i-openmoji-rocket text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							You can add class on the fly.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							To turn the text in red after 1 transition, use the
							class `start-1:text-red`. You can use `start-2:...`
							for the second transition... Use as many as you
							wish.
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
					>
						<div class="i-openmoji-bullseye text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							It temporarly add the class to your HTML.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							No magic, you know exactly what is going on at each
							transition.
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
					>
						<div class="i-openmoji-delete text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							You can also remove classes.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							With the `end-1:...` you can remove classes from
							your HTML. This is very useful when you are working
							with animate.css.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Slide>


	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<img
				src="bg.jpg"
				alt="background"
				class="fixed object-cover w-screen h-screen"
			/>
			<div
				class="absolute md:self-end lg:mr-1/8 m-5 sm:p-10 p-5 lg:w-1/3 md:w-1/2 bg-white rounded-lg relative shadow-md op90 animate__animated animate__slideInRight start-1:animate__hinge end-1:animate__slideInRight"
			>
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Feature
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Use background image
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					A picture is worth a thousand words. Illustrate your point with a background image. Then place whatever you want on top of it.
				</p>
			</div>
		</div>
	</Slide>


	<Slide>
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
			<div
				class="lg:w-11/24 w-22/24 animate__animated animate__fadeInLeft"
			>
				<Vizzu
					options={[
						(chart) =>
							chart.animate({
								data: data,
								config: {
									channels: {
										x: { set: ["Value 1", "Joy factors"] },
										color: { set: ["Joy factors"] },
										label: { set: ["Value 1"] },
									},
									coordSystem: "polar",
									legend: null,
								},
								style: {
									logo: { width: 0 },
									plot: {
										marker: {
											label: {
												fontSize: 13,
												orientation: "tangential",
												angle: 4.7,
											},
										},
										xAxis: {
											title: { color: "#ffffff00" },
											label: { color: "#ffffff00" },
											ticks: { color: "#ffffff00" },
											interlacing: { color: "#ffffff00" },
										},
										yAxis: {
											color: "#ffffff00",
											title: { color: "#ffffff00" },
											label: { color: "#ffffff00" },
											ticks: { color: "#ffffff00" },
										},
									},
								},
							}),
						(chart) => {
							chart.animate(
								{
									config: {
										channels: {
											x: {
												set: [
													"Value 1",
													"Joy factors",
													"Region",
													"Country code",
												],
											},
											label: { set: null },
										},
									},
								},
								"500ms"
							);
							chart.animate({
								config: {
									channels: {
										x: {
											set: [
												"Value 1",
												"Joy factors",
												"Region",
												"Country code",
											],
										},
										y: {
											set: ["Value 3"], /* Setting the radius of the empty circlein the centre. */
											range: { min: "-60%" },
										},
									},
								},
								style: {
									plot: {
										marker: {
											borderWidth: 0,
											borderOpacity: 1,
										},
									},
								},
							});
						},
						(chart) =>
							chart.animate({
								config: {
									channels: {
										x: {
											set: [
												"Joy factors",
												"Region",
												"Country code",
												"Value 1",
											],
										},
										color: { set: ["Joy factors"] },
									},
									coordSystem: "cartesian",
									legend: null,
								},
							}),
						(chart) =>
							chart.animate({
								config: {
									channels: {
										x: {
											set: ["Joy factors", "Value 1"],
										},
										color: { set: ["Joy factors"] },
										label: { set: ["Value 1"] },
									},
									coordSystem: "cartesian",
									legend: null,
								},
							}),
					]}
				/>
			</div>
			<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Feature
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Tell a story with your data
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Supports <a
					href="https://vizzuhq.com/"
					class="text-blue-600 hover:text-neutral-600">Vizzu</a> charts. <br />
					Click on the chart several times to trigger the animations  <br />
					<br />
					Unfortunately we cannot undo the animations yet. I'm working on it 😉
				</p>

			</div>
		</div>
	</Slide>

	<Slide>
		<div
			class="flex flex-col min-h-screen items-center justify-center md:w-7/10 w-9/10 mx-auto"
		>
			<div
				class="flex md:flex-nowrap flex-wrap md:w-7/10 w-9/10 h-1/3 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="12.svg" alt="figure-1" class="w-70 mx-auto" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Svelte-Slides is a tool to create slides.
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						`Deck` and `Slide` are the main components. 
						More components will come to support charts and visualization tools
					</p>
					<a
						href="https://github.com/AlexandreKempf/svelte-slides"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Check the code >></a
					>
				</div>
			</div>

			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap-reverse md:w-7/10 w-9/10 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInLeft animate__slow"
			>
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Svelte-Slides comes with elegant templates.
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						And it is all for free.
					</p>
					<a
						href="https://github.com/AlexandreKempf/svelte-slides/src/routes/index.svelte"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Code for the slides>></a
					>
				</div>
				<img src="14.svg" alt="figure-1" class="w-70 mx-auto" />
			</div>
			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap md:w-7/10 w-9/10 items-center mr-5 mb-5 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="16.svg" alt="figure-1" class="w-70 mx-auto" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Svelte-Slides is fluid
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
					Display your presentations on mobile or tablet. It is completely useless, but nice to have.
					</p>
					<a
						href="https://github.com/AlexandreKempf/svelte-slides"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Check the code >></a
					>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				Thanks to
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				UnoCSS.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-6 leading-relaxed"
			>
				All features included out of the box.
			</p>
			<div
				class="flex flex-wrap max-h-full max-w-full justify-evenly mx-6"
			>
				<!-- bg-gray-100 -->
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-1:animate__pulse start-1:bg-gray-100"
				>
					<div class="i-openmoji-shooting-star text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Fast.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Works like tailwind or WindiCSS but faster.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-2:animate__pulse start-2:bg-gray-100"
				>
					<div class="i-openmoji-test-tube text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Fully customizable.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Very convenient shortcuts and regex.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-3:animate__pulse start-3:bg-gray-100"
				>
					<div class="i-openmoji-ringed-planet text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Icons.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Add Pure CSS icons with a simple class.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-4:animate__pulse start-4:bg-gray-100"
				>
					<div class="i-openmoji-violin text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Sweet.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Easy to use, works with tailwind components libraries .
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-5:animate__pulse start-5:bg-gray-100"
				>
					<div class="i-openmoji-radioactive text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Debug.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Easy to debug and develop.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-6:animate__pulse start-6:bg-gray-100"
				>
					<div class="i-openmoji-shower text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						VSCode extension.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Ready for you to jump in.
					</p>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				thanks to
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				Svelte and SvelteKit.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-8 leading-relaxed"
			>
				Easy to code. Fun to play with. Fast to deploy
			</p>
			<div
				class="flex flex-wrap max-h-full max-w-full justify-evenly mx-6"
			>
				<div
					class="flex-auto xl:w-10/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg"
				>
					<img src="12.svg" alt="figure-1" class="w-5/6" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Svelte is fire.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Intuitive framework. As if HTML, CSS and JS were friends
						again.
					</p>
				</div>
				<div
					class="flex-auto xl:w-10/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg"
				>
					<img src="14.svg" alt="figure-2" class="w-5/6" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						SvelteKit is lovely.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						SSR out of the box and hot reload for fast prototyping.
					</p>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				A long road ahead to create the perfect presentation tool
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Brief list of features that could be nice to have or that is already included:
			</p>
			<div class="flex flex-wrap justify-center mt-8">
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						CSS animations
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Dynamic classes (`start` & `end`)
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Some templates to start with
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						A proper documentation
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						More templates
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Note and miniature for the speaker
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Vizzu integration
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Reference slides with anchors
					</h2>
				</div>
			</div>
		</div>
	</Slide>

</Deck>
