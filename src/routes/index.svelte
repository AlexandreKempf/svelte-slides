<script>
    import Slide from '../lib/Slide.svelte';
    import Slide1 from '../slides/demo/Slide1.svelte';
    import Slide2 from '../slides/demo/Slide2.svelte';
    import Slide3 from '../slides/demo/Slide3.svelte';
    import Slide4 from '../slides/demo/Slide4.svelte';
    import Slide5 from '../slides/demo/Slide5.svelte';
    import Slide6 from '../slides/demo/Slide6.svelte';
    import Slide7 from '../slides/demo/Slide7.svelte';
    import Slide8 from '../slides/demo/Slide8.svelte';
    import Slide9 from '../slides/demo/Slide9.svelte';
    import Slide10 from '../slides/demo/Slide10.svelte';
    import Slide11 from '../slides/demo/Slide11.svelte';
    import Slide12 from '../slides/demo/Slide12.svelte';
    import '../demo.css';
    let slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];
</script>

{#each slides as slide}
    <Slide>
        <svelte:component this={slide} />
    </Slide>
{/each}
