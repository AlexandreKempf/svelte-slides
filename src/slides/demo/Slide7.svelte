<script>
    import Todos from '../../components/Todos.svelte';
</script>

<div class="flex-row" style="min-height: 100vh;align-items: center; justify-content:space-evenly;">
    <div>
        <p class="label">Component</p>
        <h1 class="text-left">Embed Code</h1>
        <p class="major">
            Rather than talk about code, or use screenshots, simply drop it in when creating the presentations. 
             <br />
            Or when facilitating session drop a live vote widget, effort-value chart or any other tool straight in. 
            <br />
            Enter a new todo and interact with the list!
            <br/>
            <br />
        </p>
        <p class="minor">To keep the state of the element make the variables a store, or hook the component up to an external data source.</p>
    </div>
    <div>
        <Todos/>
    </div>
    
</div>
