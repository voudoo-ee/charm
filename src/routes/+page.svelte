<script>
	import Product from '../components/Product.svelte';
	import Search from '../components/Search.svelte';
	import CookieConsent from '../components/modals/CookieConsent.svelte';
	import PrivacyModal from '../components/modals/PrivacyModal.svelte';
	import CookieModal from "../components/modals/CookieModal.svelte";
	import ContactModal from "../components/modals/ContactModal.svelte";
	import ImagesModal from "../components/modals/ImagesModal.svelte";

	let highlighted = false;
	export let data;
	let { products } = data;

	function setHighlighted() {
		highlighted = !highlighted;
	}

	function handleMessage(event) {
		products = event.detail.products.products;
	}
</script>

<CookieConsent />
<CookieModal />
<PrivacyModal />
<ContactModal />
<ImagesModal />
<!--TODO maybe add sorting of products?-->
<h1 class="font-monaSansExtraBoldWide text-3xl pl-8 md:pt-8 md:text-[4rem]">
	Aitame hoida raha kokku.
</h1>
<h2 class="font-monaSansSemiBold text-xl pl-8 pt-2 md:pt-9 pr-4 md:text-2xl text-lightgrayish z-10">
	Meie
	<span
		on:mouseover={setHighlighted}
		on:mouseout={setHighlighted}
		class="font-monaSansSemiBold transition duration-300 hover-underline-animation text-darker"
	>
		otsingumootoriga
	</span>
	leiate igale toidupoe tootele kõige odavama hinna.
</h2>

<Search {highlighted} on:message={handleMessage} />
{#if products.length === 0}
	<p class="text-lightgrayish font-monaSans text-2xl z-10 pt-32">Ühtegi toodet ei leitud.</p>
{/if}
<div class="grid">
	{#each products as product (product.ean)}
		<Product {product} />
	{/each}
</div>

<div class="absolute top-[45rem] -translate-x-[42rem] ">
	{#if products.length > 1}
		<div class="circle md:-translate-y-[25rem] md:translate-x-32 -translate-x-[10rem] scale-50 md:scale-100"></div>
		<div class="circle md:translate-x-[50rem] md:-translate-y-[10rem] translate-x-12 translate-y-[60rem] scale-50 md:scale-75"></div>
		{#if products.length > 10}
			<div class="circle md:-translate-x-52 md:translate-y-96 translate-x-24 -translate-y-[70rem] scale-50 md:scale-100"></div>
		{/if}
	{/if}
</div>
