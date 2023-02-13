<script>
	import ProductNewer from "../components/ProductNewer.svelte";
	export let data;
	const { products } = data;

</script>
<h1 class="font-monaSansBlackWide text-4xl">Welcome to SvelteKit</h1>
<p class="text-lightgrayish">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if products.length === 0}
	<p class="text-lightgrayish">Loading...</p>
{:else}
	<p class="text-lightgrayish">Here are some products</p>
{/if}
<div class="grid">
	{#each products as product}
		<ProductNewer {...product} />
	{/each}
</div>
