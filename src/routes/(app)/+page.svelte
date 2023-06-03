<script>
    import Product from "../../components/Product.svelte";
    import Search from "../../components/Search.svelte";
    import CookieConsent from "../../components/modals/CookieConsent.svelte";
    import PrivacyModal from "../../components/modals/PrivacyModal.svelte";
    import CookieModal from "../../components/modals/CookieModal.svelte";
    import ContactModal from "../../components/modals/ContactModal.svelte";
    import ImagesModal from "../../components/modals/ImagesModal.svelte";
    import { isMobileUserAgent } from "$lib/util.js";
    import { onMount } from "svelte";

    export let data;
    let highlighted = false;
    let searched = false;
    let products = data.feed;

    function setHighlighted() {
        highlighted = !highlighted;
    }

    function handleMessage(event) {
        products = event.detail.products.products;
        searched = true;
    }

    onMount(async () => {
        if (isMobileUserAgent()) {
            document.querySelector("#scanner-ad").href = "/scanner";
        }
    });
</script>

<CookieConsent />
<CookieModal />
<PrivacyModal />
<ContactModal />
<ImagesModal />
<!--TODO maybe add custom sorting of products?-->
<h1 class="mt-[4rem] pl-8 font-monaSansExtraBoldWide text-3xl md:pt-8 md:text-[4rem]">
    Aitame hoida raha kokku.
</h1>
<h2 class="z-10 pl-8 pr-4 pt-2 font-monaSansSemiBold text-xl text-lightgrayish md:pt-9 md:text-2xl">
    Meie
    <span
        on:mouseover={setHighlighted}
        on:mouseout={setHighlighted}
        on:blur={setHighlighted}
        on:focus={setHighlighted}
        class="hover-underline-animation font-monaSansSemiBold text-darker transition duration-300"
    >
        otsingumootoriga
    </span>
    leiate igale toidupoe tootele kõige odavama hinna.
</h2>

<Search {highlighted} on:message={handleMessage} />
{#if products.length === 0}
    <p class="z-10 pt-32 font-monaSans text-2xl text-lightgrayish">Ühtegi toodet ei leitud.</p>
{/if}

<div class="product-grid">
    {#if !searched && products.length > 1}
        <a
            class="info-box relative col-span-full grid bg-white transition hover:translate-y-1 hover:shadow-lg"
            id="scanner-ad"
        >
            <div
                class="absolute right-0 top-0 z-10 rounded-bl-md rounded-tr-xl bg-darker px-2 py-1 font-monaSans text-white"
            >
                Beta
            </div>
            <div class="font-monaSansSemiBold">
                Voudoo Ribakoodi Skanneerija! <span
                    class="text-md opacity-0 lg:opacity-50"
                    id="mobile-disclaimer">(Ainult saadaval telefonidel.)</span
                >
            </div>
            <div class="align-middle font-monaSans">
                Kasuta meie uut, veelgi lihtsamat ja kiiremat raha säästmis süsteemi.
            </div>
        </a>
    {/if}
    {#each products as product (product.ID)}
        <Product {product} />
    {/each}
</div>

<div class="absolute top-[45rem] -translate-x-[42rem]">
    {#if products.length > 1}
        <div
            class="circle z-0 -translate-x-[10rem] scale-50 bg-darker opacity-40 blur-3xl md:-translate-y-[25rem] md:translate-x-32 md:scale-100"
        />
        <div
            class="circle z-0 translate-x-12 translate-y-[60rem] scale-50 bg-darker opacity-40 blur-3xl md:-translate-y-[10rem] md:translate-x-[50rem] md:scale-75"
        />
        {#if products.length > 10}
            <div
                class="circle z-0 -translate-y-[70rem] translate-x-24 scale-50 bg-darker opacity-40 blur-3xl md:-translate-x-52 md:translate-y-96 md:scale-100"
            />
        {/if}
    {/if}
</div>
