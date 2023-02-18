<script>
	import { onMount } from 'svelte';


	onMount(() => {
		if (localStorage.getItem('showCookieConsentModal') === null) {
			document.getElementById('cookieConsent').checked = true;
		}
	});
</script>

<input type="checkbox" id="cookieConsent" class="modal-toggle" />
<label class="modal modal-bottom">
	<label class="modal-box md:px-[25.3rem]">
		<h3 class="font-bold text-xl md:text-2xl font-monaSansExtraBoldWide">
			See veebileht kasutab
			<span class="text-darker font-monaSansExtraBoldWide hover-underline-animation">küpsiseid</span>
		</h3>
		<p class="pt-4 -mb-2 text-md leading-tight sm:text-lg font-monaSans">
			Selleks, et saaksid leida kõige odavamad hinnad, kasutame nii enda kui kolmandate osapoolte
			küpsiseid. Küpsiseid kasutatakse reklaamimiseks ning lehe funktsionaalsuseks.
			<label for="cookieModal" class="text-darker font-monaSansBoldWide hover-underline-animation"> Lugege veel.</label>
		</p>
		<label class="modal-action md:justify-start">
			<label
				for="cookieConsent"
				on:click={() => {
					localStorage.setItem('showCookieConsentModal', 'false');
				}}
				class="btn bg-darker normal-case tracking-wide hover:bg-evendarker border-none font-monaSansMedium"
				>Luban küpsiste kasutust</label
			>
		</label>
	</label>
</label>
