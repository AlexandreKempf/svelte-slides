# Preso

Made with svelte and sveltekit.

The structure of the elements of svelte presentations is: Deck's have Slides (which occupy the entire screen), Slides have steps (these are actions/animations that are sequentially triggered).


## Keys
- <kbd> &#8592; </kbd> - last step
- <kbd> &#8594; </kbd> - next step
- <kbd> &#8593; </kbd> -  previous slide
- <kbd> &#8595; </kbd> - next slide
- <kbd> Ctrl </kbd> + <kbd> Alt </kbd> + <kbd> f </kbd> - fullscreen toggle
- <kbd> Ctrl </kbd> + <kbd> Alt </kbd> + <kbd> v </kbd> - voice control toggle
- <kbd> Ctrl </kbd> + <kbd> Alt </kbd> + <kbd> t </kbd> - tap mode toggle

### Fullscreen Toggle
Turns on/off the browser to full screen mode

### Voice Mode
Can control the slide progression with your voice

#### Commands
- "Next Slide" go to the next slide
- "Previous Slide" go to the previous slide

### Tap Mode
Turns on/off the ability to navigate through the slides by touching the first horizontal quarter of the screen to go forward, or last horizontal quarter to go back.

## Animations 
Uses [animate.css](https://animate.style/), by adding to the css class.

To turn the text in red after 1 transition, use the class `start-1:text-red`. You can use `start-2:...` for the second transition... Use as many as you wish.

With the `end-1:...` you can remove classes from your HTML. This is very useful when you are working with animate.css.

The number that follows the `start-` or `end-`, denotes the step.

`animate__animated` must be added to the elements class.
### Examples 
- `animate__animated op0 start-1:op100 start-1:animate__fadeInRight` will get the element to fade in from the right and change the opacity from 0 to 100.
- `animate__animated start-1:animate__pulse start-1:bg-gray-100` will make the element pulse
- If you want an animation on the start of a slide, just don't add a step, for example, just add `animate__animated animate__slideInRight` in the CSS class will have the component slide in from the right when you enter the slide.
## Graphics
Add images, SVG or GIF to your presentation. Put them in the static directory.
### Image as a background

```html
<div class="flex flex-col min-h-screen justify-center">
    <img
        src="bg.jpg"
        alt="background"
        class="fixed object-cover w-screen h-screen"
    />
        .... put your slide contents here ...

</div>
```
### Lottie Animations
Or add a [lottie animation](https://lottiefiles.com/), for an interative graphic.
```html
    <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_rhnmhzwj.json"
        background="transparent"
        speed="1"
        loop
        autoplay
    />
```

If you aren't using lottie animations, remove the import from `app.html` to improve speed
```html
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
```
## Setup

### Create a Presentation

Create a new svelte file or folder in the routes directory.

At the heart of SvelteKit is a filesystem-based router. This means that the structure of your application is defined by the structure of your codebase — specifically, the contents of `src/routes`

index.svelte is the root of your site, every file name becomes a route and folders become sub-route.

To create a new preso on a route -> /newpreso, create a file routes/newpreso.svelte

Add the following code

```
<script>
    let slides = [];
</script>
{#each slides as slide}
    <Slide>
        <svelte:component this={slide} />
    </Slide>
{/each}
```

Then import each slide as a component and add it to the slides array.


### Voice Control

You will need a Speechly app ID. To get one of these, sign up for free with Speechly and follow [the guide here](https://docs.speechly.com/quick-start/stt-only/)

Create a .env file in the root directory, to hold your speechly app id.
```
VITE_SPEECHLY_APP_ID=#APPID#
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

This uses the adapter-auto for SvelteKit, which detects Vercel and runs adapter-vercel on your behalf.

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

### Deploying

TODO: add vercel deployment commands

### Code Formatting

To run Prettier, enter `npm run format`.