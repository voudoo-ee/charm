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
        <h3 class="font-monaSansExtraBoldWide text-xl font-bold md:text-2xl">
            See veebileht kasutab
            <span class="hover-underline-animation font-monaSansExtraBoldWide text-darker"
                >küpsiseid</span
            >
        </h3>
        <p class="text-md -mb-2 pt-4 font-monaSans leading-tight sm:text-lg">
            Selleks, et saaksid leida kõige odavamad hinnad, kasutame nii enda kui kolmandate
            osapoolte küpsiseid. Küpsiseid kasutatakse reklaamimiseks ning lehe funktsionaalsuseks.
            <label
                for="cookieModal"
                class="hover-underline-animation font-monaSansBoldWide text-darker"
            >
                Lugege veel.</label
            >
        </p>
        <label class="modal-action md:justify-start">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <label
                for="cookieConsent"
                on:click={() => {
                    localStorage.setItem("showCookieConsentModal", "false");
                }}
                class="btn border-none bg-darker font-monaSansMedium normal-case tracking-wide hover:bg-evendarker"
                >Luban küpsiste kasutust</label
            >
        </label>
    </label>
</label>
