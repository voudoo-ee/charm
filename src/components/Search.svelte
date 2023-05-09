<script>
    import "./Search.css";
    import { onMount } from "svelte";
    import { setHighlighted, unsetHighlighted } from "./Search.js";
    import { createEventDispatcher } from "svelte";

    export let highlighted;
    let mounted = false;
    let previousValue = "";
    const dispatch = createEventDispatcher();
    const raw_regex = `[a-zA-Z0-9]{2,}[ '"]{0,}[a-zA-Z0-9]{1,}`;

    onMount(async () => {
        mounted = true;
    });

    $: if (highlighted) {
        setHighlighted();
    } else if (mounted) {
        unsetHighlighted();
    }

    export async function sendMessage() {
        let products = [];
        const regex = new RegExp(raw_regex);

        let value = document.querySelector("#searchBox").value;
        document.querySelector("#searchBox").value = "";
        if (value === previousValue || regex.test(value) === false) {
            return;
        } else {
            previousValue = value;
        }

        const response = await fetch(
            "https://astronaut.grubby.workers.dev/api/v1/get_fuzzy/" + value
        );
        products = await response.json();
        products.sort((a, b) => b.price_difference_float - a.price_difference_float);

        dispatch("message", {
            products: { products }
        });
    }
</script>

<div class="pt-8 md:pt-16">
    <form
        class="group form-control relative"
        on:submit|preventDefault={sendMessage}
        on:focusout={sendMessage}
        action=""
    >
        <div class="absolute right-[3.3rem] bottom-[3.5rem] z-30 translate-y-7 bg-white">
            <div class="el opacity-0 transition duration-300 group-focus-within:opacity-100" />
            <div class="el opacity-0 transition duration-500 group-focus-within:opacity-100" />
            <div class="el opacity-0 transition duration-1000 group-focus-within:opacity-100" />
        </div>
        <div
            class="absolute bottom-1 right-1 z-20 h-10 w-16 rounded-r-2xl bg-white opacity-100 lg:opacity-0"
        />
        <div class="highlighted opacity-0 shadow-2xl" />
        <input
            id="searchBox"
            type="text"
            placeholder="Otsi tooteid, nt juust, mahl..."
            pattern={raw_regex}
            minLength={1}
            maxLength={35}
            class="input-bordered input z-10 w-72 rounded-2xl font-monaSans focus:shadow-xl focus:outline-0 md:w-[24.5rem]"
        />
    </form>
</div>
