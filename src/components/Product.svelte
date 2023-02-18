<script>
	import './Product.css';
	import ProductInner from "./ProductInner.svelte";
	export let product;
</script>

<div class="group z-10 transition duration-300 relative hover:translate-y-1">
	{#if product.price_difference_float === 0}
		<div
		class="absolute z-20 rounded-tl-xl transition duration-300 border-r-lighter group-hover:bg-special rounded-br-xl inline"
		>
			<span class="first_badge border-special bg-special rounded-tl-xl p-1 px-2 rounded-br-xl rounded-tr-none rounded-bl-none">
				{product.price_difference_float}<span class="text-white">€</span></span
			><span class="second_badge">
				{product.price_difference_percentage}<span class="text-white">%</span>
			</span>
		</div>
	{:else}
		<div
		class="absolute z-20 rounded-tl-xl transition duration-300 border-r-lighter group-hover:bg-darker rounded-br-xl inline"
		>
			<span class="first_badge border-darker bg-darker rounded-tl-xl p-1 px-2 rounded-br-xl rounded-tr-none rounded-bl-none">
				{product.price_difference_float}<span class="text-white">€</span></span
			><span class="second_badge">
				{product.price_difference_percentage}<span class="text-white">%</span>
			</span>
		</div>
	{/if}


	<!--      <div class="cart-container group">-->
	<!--        <div class="badge_cart rounded-br-xl rounded-tl-xl group-hover:rounded-br-[0.67rem] group-hover:-translate-x-[0.35rem] group-hover:-translate-y-[0.3rem] group-hover:scale-125">-->
	<!--          <svg xmlns="http://www.w3.org/2000/svg" width="32"-->
	<!--               height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"-->
	<!--               stroke-linecap="round" stroke-linejoin="round">-->
	<!--            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>-->
	<!--            <line x1="12" y1="5" x2="12" y2="19"></line>-->
	<!--            <line x1="5" y1="12" x2="19" y2="12"></line>-->
	<!--          </svg>-->
	<!--        </div>-->
	<!--      </div>-->
	{#if product.price_difference_float === 0}
		<div class="special-card">
			<ProductInner {...product} />
		</div>
	{:else}
		<div class="default-card">
			<ProductInner {...product} />
		</div>
	{/if}
</div>
