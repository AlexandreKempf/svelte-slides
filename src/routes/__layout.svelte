<script>
    import Notifications from 'svelte-notifications';
    import Deck from '../lib/Deck.svelte';
</script>

<Notifications>
    <Deck>
        <slot />
    </Deck>
</Notifications>
