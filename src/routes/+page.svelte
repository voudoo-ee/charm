<script>
	import Product from "../components/Product.svelte";
	import Search from "../components/Search.svelte";

	export let data;
	let { products } = data;
</script>

<h1 class="font-monaSansExtraBoldWide text-[4rem]">Aitame hoida raha kokku.</h1>
<h2 class="font-monaSansSemiBold text-2xl text-lightgrayish">Meie <span class="font-monaSansSemiBold transition duration-300 hover-underline-animation text-darker">otsingumootoriga</span> leiate igale toidupoe tootele kõige odavama hinna.</h2>
<!--<p class="text-lightgrayish text-black z-10">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>-->
<!--{#if products.length === 0}-->
<!--	<p class="text-lightgrayish text-black z-10">Loading...</p>-->
<!--{:else}-->
<!--	<p class="text-lightgrayish text-black z-10">Here are some products</p>-->
<!--{/if}-->

<Search />
<div class="grid">
	{#each products as product}
		<Product {...product} />
	{/each}
	<div class="circle md:-translate-y-[25rem] md:translate-x-32 -translate-x-[10rem] scale-50 md:scale-100"></div>
	<div class="circle md:-translate-x-52 md:translate-y-96 translate-x-24 -translate-y-[70rem] scale-50 md:scale-100"></div>
	<div class="circle md:translate-x-[50rem] md:-translate-y-[10rem] translate-x-12 translate-y-[60rem] scale-50 md:scale-75"></div>
</div>

