<script>
    import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
    import { onMount } from "svelte";
    import { isMobileUserAgent, shortenName } from "$lib/util.js";
    import { goto } from "$app/navigation";
    import "../../app.css";

    const config = { fps: 5, qrbox: { width: 250, height: 250 } };
    let cached_ean = "";
    let selected_store = "";
    let tip_text = "Asetage toote vöötkood kaamera keskele.";
    let scanner;

    function onScanSuccess(decodedText) {
        if (cached_ean === decodedText) {
            return;
        }

        cached_ean = decodedText;
        let cheapest = false;

        getDataFromPlanetary(decodedText).then(async (data) => {
            if (data.length === 0) {
                cached_ean = "";
                tip_text = "Toodet ei ole hetkel andmebaasis, saatsime selle teele!";
                await fetch(
                    `https://astronaut.grubby.workers.dev/api/v1/add_missing/${decodedText}/${selected_store}`
                );
                return;
            }

            document.getElementById("result-ean").innerHTML = "EAN: " + data[0].ean;
            document.getElementById("result-name").innerHTML =
                "Name: " + shortenName(data[0].name, 10);
            document.getElementById("result-price").innerHTML = "Price: " + data[0].price;
            document.getElementById("result-store").innerHTML = "Store: " + data[0].store;
            if (data[0].disregard === 0) {
                cheapest = true;
            }

            if (cheapest) {
                document.getElementById("cheapest").innerHTML = "Parim hind meie andmebaasis!";
            } else {
                document.getElementById("cheapest").innerHTML = "Säästad raha, kui ostad mujalt!";
            }
        });

        return new Promise(function (resolve) {
            setTimeout(resolve, 5000);
        }).then(function () {
            tip_text = "Asetage toote vöötkood kaamera keskele.";
        });
    }

    onMount(async () => {
        // Disable scrolling
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";

        // Redirect non-mobile devices to the home page
        if (!isMobileUserAgent()) {
            await goto("/");
        }
    });

    function selectStore(store) {
        document.getElementById("store-selection").classList.add("fade-out");
        setTimeout(() => {
            selected_store = store;
            document.getElementById("qr-reader").classList.add("fade-in");
            startScanner();
        }, 1000);
    }

    function startScanner() {
        scanner = new Html5Qrcode("qr-reader", {
            formatsToSupport: [
                Html5QrcodeSupportedFormats.EAN_13,
                Html5QrcodeSupportedFormats.EAN_8,
                Html5QrcodeSupportedFormats.CODE_128
            ]
        });

        scanner.start({ facingMode: "environment" }, config, onScanSuccess, undefined);
    }

    async function getDataFromPlanetary(ean) {
        const response = await fetch(
            `https://astronaut.grubby.workers.dev/api/v1/get_ean/${ean}/${selected_store}`
        );
        return await response.json();
    }
</script>

<div class="bg-green">
    <div class="absolute left-0 top-0 z-20 w-[100vw] rounded-b-2xl bg-white p-2">
        {#if cached_ean !== ""}
            <div class="mb-0 mt-0 grid grid-cols-2 grid-rows-2">
                <!--	create a 2x2 grid here	-->
                <span id="result-name" />
                <span id="result-ean" />
                <span id="result-price" />
                <span id="result-store" />
            </div>
            <div id="cheapest" class="mt-2 text-center font-monaSans" />
        {:else if selected_store !== ""}
            <div class="fade-in text-center font-monaSans" id="tip">
                {tip_text}
            </div>
        {/if}
    </div>
    {#if selected_store === ""}
        <div class="text-center font-monaSans" id="store-selection">
            Valige pood, milles toodet otsite.
            <div>
                {#each ["Selver", "Prisma"] as store}
                    <button
                        class="focus:fade-out m-2 rounded-lg bg-darker p-2 text-white transition hover:translate-y-0.5"
                        on:click={() => {
                            selectStore(store);
                        }}>{store}</button
                    >
                {/each}
            </div>
        </div>
    {/if}
    <div id="qr-reader" class="w-[600px] -translate-y-3" />
</div>
