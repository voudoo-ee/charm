<script>
    import { shortenName } from "../util.js";
    export let price_difference_percentage;
    export let price_difference_float;
    export let is_age_restricted;
    export let image_url;
    export let name;
    export let ean;
    export let weight;
    export let unit_price;
    export let brand;
    export let is_discount;
    export let price;
    export let url;
    export let store;
</script>

<a href={url} rel="noreferrer" target="_blank">
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
        {#if price_difference_float === 0}
            <p class="bg-special inline px-2 py-1 rounded-xl font-monaSansBoldWide text-white">
                {price}<span class={"font-sans font-bold text-white"}>€</span>
            </p>
        {:else}
            <p class="bg-darker inline px-2 py-1 rounded-xl font-monaSansBoldWide text-white">
                {price}<span class={"font-sans font-bold text-white"}>€</span>
            </p>
        {/if}
    {:else}
        <p class="font-monaSansBoldWide">
            {price}<span class={"font-sans font-bold"}>€</span>
        </p>
    {/if}
</div>
