<script>
    import "./Product.css";
    import ProductInner from "./ProductInner.svelte";
    export let product;
    delete product.ID;
    delete product.category;
</script>

<div class="group z-10 transition duration-300 relative hover:translate-y-1">
    <a href={product.url} target="_blank" rel="noreferrer">
        {#if product.price_difference_float === 0}
            <div
                class="absolute z-20 rounded-tl-xl transition duration-300 border-r-lighter group-hover:bg-special rounded-br-xl inline"
            >
                <span
                    class="first_badge border-special bg-special rounded-tl-xl p-1 px-2 rounded-br-xl rounded-tr-none rounded-bl-none"
                >
                    {product.price_difference_float}<span class="text-white">€</span></span
                ><span class="second_badge">
                    {product.price_difference_percentage}<span class="text-white">%</span>
                </span>
            </div>
        {:else}
            <div
                class="absolute z-20 rounded-tl-xl transition duration-300 border-r-lighter group-hover:bg-darker rounded-br-xl inline"
            >
                <span
                    class="first_badge border-darker bg-darker rounded-tl-xl p-1 px-2 rounded-br-xl rounded-tr-none rounded-bl-none"
                >
                    {product.price_difference_float}<span class="text-white">€</span></span
                ><span class="second_badge">
                    {product.price_difference_percentage}<span class="text-white">%</span>
                </span>
            </div>
        {/if}

        {#if product.price_difference_float === 0}
            <div class="special-card">
                <ProductInner {...product} />
            </div>
        {:else}
            <div class="default-card">
                <ProductInner {...product} />
            </div>
        {/if}
    </a>
</div>
