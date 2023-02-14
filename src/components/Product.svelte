<script>
	import './Product.css';
	export let price_difference_percentage;
	export let price_difference_float;
	export let is_age_restricted;
	export let image_url;
	export let name;
	export let weight;
	export let unit_price;
	export let brand;
	export let is_discount;
	export let price;
	export let url;
	export let store;

	export function shortenName(name) {
		const LENGTH_TO_CUT = 20;
		if (name.length > LENGTH_TO_CUT) {
			return name.slice(0, LENGTH_TO_CUT) + '...';
		} else {
			return name;
		}
	}
</script>

<div class="group z-10 transition duration-300 relative hover:translate-y-1">
	<div
		class="absolute z-20 rounded-tl-xl transition duration-300 border-r-lighter group-hover:bg-darker rounded-br-xl inline"
	>
		<span class="first_badge rounded-tl-xl p-1 px-2 rounded-br-xl rounded-tr-none rounded-bl-none">
			{price_difference_float}<span class="text-white">€</span></span
		><span class="second_badge">
			{price_difference_percentage}<span class="text-white">%</span>
		</span>
	</div>
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
	<div class="card">
		<a href={url}>
			<img
				class="object-contain -translate-y-5 h-48 w-96 pt-6"
				src={image_url}
				decoding="async"
				loading="lazy"
				width={200}
				height={200}
				alt={name}
			/>
		</a>
		<h2 class="font-monaSansMedium text-superblue">{shortenName(name)}</h2>
		<div class="opacity-50">
			<p class="text-sm">{weight} / {unit_price}€</p>
			<p class="text-sm">{brand}</p>
		</div>
		<div class="bottom-0 text-2xl z-0">
			{#if is_discount}
				<p class="bg-darker inline px-2 py-1 rounded-xl font-monaSansBoldWide text-white">
					{price}<span class={'font-sans font-bold text-white'}>€</span>
				</p>
			{:else}
				<p class="font-monaSansBoldWide">
					{price}<span class={'font-sans font-bold'}>€</span>
				</p>
			{/if}
		</div>
	</div>
</div>
