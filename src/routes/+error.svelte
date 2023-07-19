<script>
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';
    import "../app.css";
    import { onMount } from 'svelte';

    let visible = false;
    onMount(async () => {
        setTimeout(() => {
            visible = true;
        }, 500);
    });
</script>

{#if visible}
    <h1 class="font-gilroyBold text-3xl px-8 md:text-5xl text-center" transition:fade>We are still developing this website... issues may occur.</h1>
    <a class="font-gilroyBold text-3xl px-8 md:text-5xl text-center mt-5 hover:text-darker transition-colors" transition:fade href="/">↳ Go back</a>
    <h3 class="mt-5" transition:fade>{$page.status} {$page.error.message}</h3>
{/if}
