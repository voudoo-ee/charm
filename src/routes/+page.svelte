<script>
    import {onMount} from "svelte";

    const url = "https://router.grubby.workers.dev/get_random"
    let products = []

    onMount(async function () {
      const response = await fetch(url);
      products = await response.json();
    });

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if products.length === 0}
    <p>Loading...</p>
{:else}
    <p>Here are some products</p>
{/if}
{#each products as product}
    <div>
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
    </div>
{/each}
