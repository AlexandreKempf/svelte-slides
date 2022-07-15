<script>
    import 'uno.css';
    import 'animate.css';
    import '@unocss/reset/tailwind.css';
    import screenfull from 'screenfull';
    import { setContext, getContext, onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { writable } from 'svelte/store';
    import { tap } from 'svelte-gestures';
    import { getNotificationsContext } from 'svelte-notifications';
    import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
    import SpeechRecognition, { useSpeechRecognition } from 'svelte-speech-recognition/SpeechRecognition';
    import Keydown from 'svelte-keydown';
    //const startListening = () => SpeechRecognition.startListening({ continuous: true });
    const { addNotification } = getNotificationsContext();

    let tapNavigationAllowed = false;
    let slidesStore = writable([]);
    let currentIndexStore = writable(0);
    let stepStore = writable(0);
    let vizzuStepStore = writable(0);
    let maxStepsStore = writable(0);
    let fullscreen = false;
    let component;

    setContext('slides', slidesStore);
    setContext('currentIndex', currentIndexStore);
    setContext('step', stepStore);
    setContext('maxSteps', maxStepsStore);
    setContext('vizzuStep', vizzuStepStore);

    let currentIndex = getContext('currentIndex');
    let slides = getContext('slides');
    let step = getContext('step');
    let maxSteps = getContext('maxSteps');
    let vizzuStep = getContext('vizzuStep');

    let yScroll;

    ///voice control set up
    const appId = import.meta.env.VITE_SPEECHLY_APP_ID;
    const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

    const commands = [
        {
            command: 'Next Slide',
            callback: () => nextSlide(),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.8,
            matchInterim: true,
        },
        {
            command: ['Previous Slide'],
            callback: () => previousSlide(),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.8,
            matchInterim: true,
        },
        {
            command: ['furthermore','what\'s more','additionally'],
            callback: () => nextStep(),
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.8,
            matchInterim: true,
        }
    ];
    const { transcriptStore, listening, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition({
        commands,
    });

    onMount(() => {
        if (screenfull.isEnabled) {
            screenfull.on();
        }
    });
    onDestroy(() => {
        if (screenfull.isEnabled) {
            screenfull.off();
        }
    });

    const onFullscreenToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(component);
        }
        if (screenfull.isFullscreen) {
            addNotification({
                text: 'Entered Fullscreen Mode',
                position: 'bottom-center',
                type: 'success',
                removeAfter: 2000,
            });
        } else {
            addNotification({
                text: 'Exited Fullscreen Mode',
                position: 'bottom-center',
                type: 'warning',
                removeAfter: 2000,
            });
        }
    };

    const next = (index, numElem) => Math.min(index + 1, numElem - 1);
    function nextStep() {
        resetTranscript();
        if ($step == $maxSteps) {
            $currentIndex = Math.min($currentIndex + 1, $slides.length - 1);
            $step = 0;
            // $vizzuStep = 0;
        } else {
            $step = Math.min($step + 1, $maxSteps);
        }
    }
    function nextSlide() {
        resetTranscript();
        $currentIndex = Math.min($currentIndex + 1, $slides.length - 1);
    }
    function previousSlide() {
        resetTranscript();
        $currentIndex = Math.max($currentIndex - 1, 0);
        $step = 0;
    }

    let ScreenWidth;
    function handleTap(event) {
        if (tapNavigationAllowed) {
            const numSlides = $slides.length;
            const xTap = event.detail.x;

            if (xTap < ScreenWidth / 4) {
                $currentIndex = Math.max($currentIndex - 1, 0);
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
    }

    function tapNavigator() {
        if (tapNavigationAllowed) {
            tapNavigationAllowed = false;
            addNotification({
                text: 'Tap Navigation Mode Deactivated',
                position: 'bottom-center',
                type: 'warning',
                removeAfter: 2000,
            });
        } else {
            tapNavigationAllowed = true;
            addNotification({
                text: 'Tap Navigation Mode Activated',
                position: 'bottom-center',
                type: 'success',
                removeAfter: 2000,
            });
        }
    }
    function voiceController() {
        if ($listening) {
            SpeechRecognition.abortListening();
            addNotification({
                text: 'Voice Control Mode Deactivated',
                position: 'bottom-center',
                type: 'warning',
                removeAfter: 2000,
            });
        } else {
            SpeechRecognition.startListening({ continuous: true });
            addNotification({
                text: 'Voice Control Mode Activated',
                position: 'bottom-center',
                type: 'success',
                removeAfter: 2000,
            });
        }
    }

    // let keyCommands = {
    //     'Control-Alt-t': 'tapNavigator()',
    //     'Control-Alt-T': 'tapNavigator()',
    //     'Control-Alt-þ': 'tapNavigator()',
    //     'Control-Alt-v': 'voiceController()',
    //     'Control-Alt-V': 'voiceController()',
    //     'Control-Alt-f': 'onFullscreenToggle()',
    //     'Control-Alt-F': 'onFullscreenToggle()',
    //     ArrowDown: 'nextSlide()',
    //     ArrowUp: 'previousSlide()',
    //     ArrowLeft: 'previousSlide()',
    //     ArrowRight: 'nextStep()',
    // };
    function keyDown(detail) {
        switch(detail){
            case 'Control-Alt-t':
            case 'Control-Alt-T':
            case 'Control-Alt-þ':
                tapNavigator();
                break;
            case 'Control-Alt-v':
            case 'Control-Alt-V':
                voiceController();
                break;
            case 'Control-Alt-f':
            case 'Control-Alt-F':
                onFullscreenToggle();
                break;
            case 'ArrowDown':
                nextSlide();
                break;
            case 'ArrowUp':
                previousSlide();
                break;
            case 'ArrowLeft':
                previousSlide();
                break;
            case 'ArrowRight':
                nextStep();
                break;         
        }

        // if (keyCommands[detail] != undefined) {
        //     //setTimeout(commands[detail],1);
        //     eval(keyCommands[detail]);
        // }
    }

    $: {
        // reset yScroll on slide change
        yScroll = 0;
        $currentIndex;
    }
</script>

<svelte:window bind:scrollY={yScroll} />
<Keydown
    on:combo={({ detail }) => {
        keyDown(detail);
    }}
/>
<div bind:this={component}>
    <div style="min-height: 100vh;min-width:100%;"
        use:tap={{ timeframe: 500 }}
        on:tap={handleTap}
        bind:clientWidth={ScreenWidth}
    >
        <slot />
    </div>
</div>

<style>
    :fullscreen,
    ::backdrop {
        background-color: white;
    }
</style>
