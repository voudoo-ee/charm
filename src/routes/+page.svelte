<script>
	import ProductNewer from "../components/ProductNewer.svelte";
	export let data;
	const { products } = data;

</script>

<h1 class="font-monaSansBlackWide text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if products.length === 0}
	<p>Loading...</p>
{:else}
	<p>Here are some products</p>
{/if}
<div class="grid">
	{#each products as product}
		<ProductNewer {...product} />
	{/each}
</div>
