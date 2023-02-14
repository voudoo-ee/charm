<script>
    import './Search.css';
    import {onMount} from "svelte";
    import {setHighlighted, unsetHighlighted} from "./Search.js";
    import { createEventDispatcher } from 'svelte';

    export let highlighted;
    let mounted = false;
    let previousValue = '';
    const dispatch = createEventDispatcher();

    onMount(async () => {
      mounted = true;
    });

    $: if (highlighted) {
        setHighlighted();
    } else if (mounted) {
        unsetHighlighted();
    }

    export async function sayHello() {
        let products = [];
        let value = document.querySelector('input').value;
        document.querySelector('input').value = '';
        if (value === previousValue || value.length < 2) {
            return;
        } else {
          previousValue = value;
        }

        const response = await fetch('https://router.grubby.workers.dev/get_product_fuzzy/' + value);
        products = await response.json();
        products.forEach(product => {
            delete product.ean;
            delete product.other_ean;
            delete product.category;
        });

        dispatch('message', {
            products: {products}
        });
    }
</script>


<div class="pt-8 md:pt-16">
    <form class="form-control group relative" on:submit|preventDefault={sayHello} on:focusout={sayHello} action="">
        <div class="translate-y-7 right-[3.3rem] bottom-[3.5rem] z-30 absolute bg-white">
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-300"></div>
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-500"></div>
            <div class="el transition opacity-0 group-focus-within:opacity-100 duration-1000"></div>
        </div>
        <div class="lg:opacity-0 opacity-100 bg-white w-16 rounded-r-2xl h-10 absolute z-20 bottom-1 right-1"></div>
        <div class="highlighted shadow-2xl opacity-0"></div>
        <input type="text" placeholder="Otsi tooteid, nt juust, mahl..."
               pattern={"[a-zA-Z0-9]{2,}[']{0,}[a-zA-Z0-9]"} minLength={1} maxLength={35}
               class="input font-monaSans rounded-2xl w-72 md:w-[24.5rem] input-bordered focus:outline-0 z-10 focus:shadow-xl" />
    </form>
</div>
