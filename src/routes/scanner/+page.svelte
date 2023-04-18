<script>
	import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
	import { onMount } from "svelte";
	import { isMobileUserAgent, shortenName } from "../../util.js";
    import { goto } from "$app/navigation";
	import "../../app.css"
	
	const config = { fps: 5, qrbox: { width: 250, height: 250 } };
	var cached_ean = "";
	var scanner;

	function onScanSuccess(decodedText) {
		if (cached_ean == decodedText) { return; }
		cached_ean = decodedText;
		let cheapest = false;

		getDataFromPlanetary(decodedText).then((data) => {
			document.getElementById("result-ean").innerHTML = "EAN: " + data[0].ean;
			document.getElementById("result-name").innerHTML = "Name: " + shortenName(data[0].name, 10);
			document.getElementById("result-price").innerHTML = "Price: " + data[0].price;
			document.getElementById("result-store").innerHTML = "Store: " + data[0].store;
			if (data[0].disregard == 0) {
				cheapest = true;
			};
			document.getElementById("cheapest").innerHTML = "Cheapest: " + cheapest;
		});
	}

	onMount(async () => {
		// Redirect non-mobile devices to the home page
		if (!isMobileUserAgent()) {
			alert("This page is only available on mobile devices.");
			goto("/");
			return;
		}

		scanner = new Html5Qrcode("qr-reader", { 
			formatsToSupport: [Html5QrcodeSupportedFormats.EAN_13, Html5QrcodeSupportedFormats.EAN_8]
		});

		scanner.start({ facingMode: "environment" }, config, onScanSuccess);
	});

	async function getDataFromPlanetary(ean) {
		const response = await fetch("https://astronaut.grubby.workers.dev/api/v1/get_ean/" + ean);
		const data = await response.json();
		return data;
	}
</script>

<div>
	<div class="absolute left-0 top-0 bg-white w-[100vw] z-20 p-2 rounded-b-2xl">
		{#if cached_ean != ""}
			<div class="grid grid-cols-2 grid-rows-2 mb-0 mt-0">
					<!--	create a 2x2 grid here	-->
				<span id="result-name"></span>
				<span id="result-ean"></span>
				<span id="result-price"></span>
				<span id="result-store"></span>
			</div>
			<div id="cheapest">
				
			</div>
		{:else if isMobileUserAgent()}
			<div class="text-center font-monaSans">
				Asetage toote vöötkood kaamera keskele.
			</div>
		{/if}
	</div>
	<div>
		<div id="qr-reader" style="width: 600px"></div>
	</div>
</div>