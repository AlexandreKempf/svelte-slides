<script>
	import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";
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
				Long headline to turn your visitors into users.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Free and Premium themes, UI Kit's, templates and landing pages
				built with Tailwind CSS, HTML & Next.js.
			</p>
			<a
				href="https://www.google.com"
				class="font-sans text-center text-lg max-w-4/6 mx-auto mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
				>Read more about the offer >></a
			>
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
					your tagline
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Medium length display headline.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Free and Premium themes, UI Kit's, templates and landing
					pages built with Tailwind CSS, HTML & Next.js.
				</p>

				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Ain't no sunshine when she's gone. <br />
					Expensive feature away. <br />
					Really good features.
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
					your tagline
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Medium length display headline.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Free and Premium themes, UI Kit's, templates and landing
					pages built with Tailwind CSS, HTML & Next.js.
				</p>

				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Ain't no sunshine when she's gone. <br />
					Expensive feature away. <br />
					Really good features.
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

	<Slide maxSteps={4}>
		<div class="flex flex-wrap justify-evenly mx-auto max-w-22/24 pt-20">
			<div class="xl:w-11/24 w-22/24">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					your tagline
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Medium length display headline.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Free and Premium themes, UI Kit's, templates and landing
					pages built with Tailwind CSS, HTML & Next.js.
				</p>

				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Ain't no sunshine when she's gone. <br />
					Expensive feature away. <br />
					Really good features.
				</p>
			</div>
			<div class="xl:w-11/24 w-22/24">
				<div
					class="flex flex-wrap justify-evenly items-top mx-auto max-w-22/24"
				>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
					>
						<div class="i-openmoji-scarf text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Long headline to turn your visitors into users.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							Explain two of the best features you saw in Madrid
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
					>
						<div class="i-openmoji-rocket text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Long headline to turn your visitors into users.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							Explain two of the best features you saw in Madrid
							Explain two of the best features you saw in Madrid
							Explain two of the best features you saw in Madrid
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
					>
						<div class="i-openmoji-bullseye text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Long headline to turn your visitors into users.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							Explain two of the best features you saw in Madrid
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
					>
						<div class="i-openmoji-telephone text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Long headline to turn your visitors into users.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							Explain two of the best features you saw in Madrid
						</p>
					</div>
				</div>
			</div>
		</div>
	</Slide>

	<Slide maxSteps={6}>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				your tagline
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				Long headline to turn your visitors into users.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-8 leading-relaxed"
			>
				Free and Premium themes, UI Kit's, templates and landing pages
				built with Tailwind CSS, HTML & Next.js.
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
						Shooting Stars.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-2:animate__pulse start-2:bg-gray-100"
				>
					<div class="i-openmoji-test-tube text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						The Catalyzer.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-3:animate__pulse start-3:bg-gray-100"
				>
					<div class="i-openmoji-ringed-planet text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Saturne.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-4:animate__pulse start-4:bg-gray-100"
				>
					<div class="i-openmoji-violin text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Melanchole.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-5:animate__pulse start-5:bg-gray-100"
				>
					<div class="i-openmoji-radioactive text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Bunker.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-6:animate__pulse start-6:bg-gray-100"
				>
					<div class="i-openmoji-shower text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Ramona Falls.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
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
				your tagline
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				Long headline to turn your visitors into users.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-8 leading-relaxed"
			>
				Free and Premium themes, UI Kit's, templates and landing pages
				built with Tailwind CSS, HTML & Next.js.
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
						Shooting Stars.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
				<div
					class="flex-auto xl:w-10/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg"
				>
					<img src="14.svg" alt="figure-2" class="w-5/6" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						The Catalyzer.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						Fingerstache flexitarian street art 8-bit waist co,
						subway tile poke farm
					</p>
				</div>
			</div>
		</div>
	</Slide>

	<Slide maxSteps={1}>
		<div class="flex flex-col min-h-screen justify-center">
			<img
				src="bg.jpg"
				alt="background"
				class="fixed object-cover w-screen h-screen"
			/>
			<div
				class="absolute md:self-end lg:mr-1/8 m-5 sm:p-10 p-5 lg:w-1/3 md:w-1/2 bg-white rounded-lg relative shadow-md op90 animate__animated animate__slideInRight"
			>
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					your tagline
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Medium length display headline.
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Free and Premium themes, UI Kit's, templates and landing
					pages built with Tailwind CSS, HTML & Next.js.
				</p>
			</div>
		</div>
	</Slide>

	<Slide>
		<div
			class="flex flex-col min-h-screen items-center justify-center md:w-7/10 w-9/10 mx-auto space-y-5"
		>
			<div
				class="flex md:flex-nowrap flex-wrap h-1/3 items-center mr-5 border-b-1 border-gray-400 pb-10"
			>
				<img src="12.svg" alt="figure-1" class="w-70" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Long headline to turn your visitors into users.
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						Free and Premium themes, UI Kit's, templates and landing
						pages built with Tailwind CSS, HTML & Next.js.
					</p>
					<a
						href="https://www.google.com"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Read more about the offer >></a
					>
				</div>
			</div>

			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap-reverse items-center mr-5 border-b-1 border-gray-400 pb-10"
			>
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Long headline to turn your visitors into users.
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						Free and Premium themes, UI Kit's, templates and landing
						pages built with Tailwind CSS, HTML & Next.js.
					</p>
					<a
						href="https://www.google.com"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Read more about the offer >></a
					>
				</div>
				<img src="14.svg" alt="figure-1" class="w-70" />
			</div>
			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap items-center mr-5 pb-10"
			>
				<img src="16.svg" alt="figure-1" class="w-70" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						Long headline to turn your visitors into users.
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						Free and Premium themes, UI Kit's, templates and landing
						pages built with Tailwind CSS, HTML & Next.js.
					</p>
					<a
						href="https://www.google.com"
						class="font-sans text-lg mt-8 leading-relaxed font-semibold text-blue-600 hover:text-neutral-600"
						>Read more about the offer >></a
					>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Long headline to turn your visitors into users.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Free and Premium themes, UI Kit's, templates and landing pages
				built with Tailwind CSS, HTML & Next.js.
			</p>
			<div class="flex flex-wrap justify-center mt-8">
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Authentic Cliche Forage
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Coloring Book Ethical
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Pack Truffaut Blue
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Kinfolk Chips Snackwave
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Typewriter Polaroid Cray
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						The Catcher In The Rye
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Raw Denim Heirloom
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						Blue Bottle Crucifix
					</h2>
				</div>
			</div>
		</div>
	</Slide>
</Deck>
