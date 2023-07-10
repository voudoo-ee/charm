<script>
    import "./Product.css";
    import ProductInner from "./ProductInner.svelte";
    export let product;
</script>

<div class="group relative z-10 transition duration-300 hover:translate-y-1">
    <a href={product.url} target="_blank" rel="noreferrer">
        {#if product.price_difference_float === 0}
            <div
                class="absolute z-20 inline rounded-br-xl rounded-tl-xl border-r-lighter transition duration-300 group-hover:bg-special"
            >
                <span
                    class="-translate-y-0.5 rounded-bl-none rounded-br-xl rounded-tl-xl rounded-tr-none border-special bg-special p-1 px-2 font-monaSansExtraBoldWide text-xl text-white transition"
                >
                    {product.price_difference_float}<span class="text-white">€</span></span
                ><span
                    class="z-20 rounded-br-2xl py-1 pr-1 font-monaSansExtraBoldWide text-xl text-white opacity-0 group-hover:opacity-100 group-hover:duration-500"
                >
                    {product.price_difference_percentage}<span class="text-white">%</span>
                </span>
            </div>
        {:else}
            <div
                class="absolute z-20 inline rounded-br-xl rounded-tl-xl border-r-lighter transition duration-300 group-hover:bg-darker"
            >
                <span
                    class="-translate-y-0.5 rounded-bl-none rounded-br-xl rounded-tl-xl rounded-tr-none border-darker bg-darker p-1 px-2 font-monaSansExtraBoldWide text-xl text-white transition"
                >
                    {product.price_difference_float}<span class="text-white">€</span></span
                ><span
                    class="z-20 rounded-br-2xl py-1 pr-1 font-monaSansExtraBoldWide text-xl text-white opacity-0 group-hover:opacity-100 group-hover:duration-500"
                >
                    {product.price_difference_percentage}<span class="text-white">%</span>
                </span>
            </div>
        {/if}

        {#if product.price_difference_float === 0}
            <div
                class="special-card rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
                <ProductInner {...product} />
            </div>
        {:else}
            <div
                class="default-card rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
                <ProductInner {...product} />
            </div>
        {/if}
    </a>
</div>
