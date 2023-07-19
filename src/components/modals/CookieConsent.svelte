<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (localStorage.getItem("showCookieConsentModal") === null) {
            document.getElementById("cookieConsent").checked = true;
        }
    });
</script>

<input type="checkbox" id="cookieConsent" class="modal-toggle" />
<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="modal modal-bottom">
    <label class="modal-box md:px-[25.3rem]">
        <p class="text-md -mb-2 font-monaSans leading-tight sm:text-lg text-description sm:text-center">
            Me kasutame küpsiseid, et teha<br class="hidden md:block"> veebileht mugavamaks.
            <label
                for="cookieModal"
                class="hover-underline-animation font-monaSansBoldWide text-darker"
            >
                Lugege veel.</label
            >
        </p>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label class="modal-action sm:flex sm:justify-center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <label
                for="cookieConsent"
                tabindex="0"
                on:click={() => {
                    localStorage.setItem("showCookieConsentModal", "false");
                    // localStorage.setItem("minimalCookieConsent", "false")
                }}
                class="border-none bg-darker p-2 w-96 text-center rounded-xl text-md text-white font-monaSansSemiBold hover:bg-evendarker transition duration-300"
                >Luban küpsiste kasutust</label
            >
        </label>
        <label class="flex mt-2 sm:justify-center hidden">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <label
                tabindex="-1"
                on:click={() => {
                    localStorage.setItem("showCookieConsentModal", "false");
                    localStorage.setItem("minimalCookieConsent", "true")
                }}
                class="border border-gray-500 bg-white p-2 w-96 text-center rounded-xl text-md text-gray-500 font-monaSansMedium hover:bg-gray-200 hover:text-gray-600 transition duration-300"
                >Luban vähest küpsiste kasutust</label
            >
        </label>
    </label>
</label>
