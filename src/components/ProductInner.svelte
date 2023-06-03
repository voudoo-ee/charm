<script>
    import { shortenName } from "../lib/util.js";
    export let price_difference_float;
    export let image_url;
    export let name;
    export let weight;
    export let unit_price;
    export let brand;
    export let is_discount;
    export let price;
</script>

<img
    class="h-48 w-96 -translate-y-5 object-contain pt-6"
    src={image_url}
    decoding="async"
    loading="lazy"
    width={200}
    height={200}
    alt={name}
/>
<h2 class="font-monaSansMedium text-superblue">{shortenName(name)}</h2>
<div class="opacity-50">
    <p class="text-sm">{weight} / {unit_price}€</p>
    <p class="text-sm">{brand}</p>
</div>
<div class="bottom-0 z-0 text-2xl">
    {#if is_discount}
        {#if price_difference_float === 0}
            <p class="inline rounded-xl bg-special px-2 py-1 font-monaSansBoldWide text-white">
                {price}<span class={"font-sans font-bold text-white"}>€</span>
            </p>
        {:else}
            <p class="inline rounded-xl bg-darker px-2 py-1 font-monaSansBoldWide text-white">
                {price}<span class={"font-sans font-bold text-white"}>€</span>
            </p>
        {/if}
    {:else}
        <p class="font-monaSansBoldWide">
            {price}<span class={"font-sans font-bold"}>€</span>
        </p>
    {/if}
</div>
