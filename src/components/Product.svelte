<script>
    export let price_difference_percentage;
    export let price_difference_float;
    export let is_age_restricted;
    export let image_url;
    export let name;
    export let weight;
    export let unit_price;
    export let brand;
    export let is_discount;
    export let price;
    export let url;
    export let store;
</script>

<div>
    <div class="group border border-hunter relative">
      <div class=" group">
        <span class="absolute inline-flex items-center justify-center font-bold leading-none translate-x-[1rem] -translate-y-[1rem] right-0 top-0 group">
          <span
            class="translate-x-[0.1rem] absolute transition ease-in-out group-hover:opacity-0">
            {price_difference_percentage}
            <span class="text-xs">%</span>
          </span>
          <span class="translate-x-[0.1rem] absolute transition ease-in-out opacity-0 group-hover:opacity-100">
            {price_difference_float}
            <span class="text-xs">€</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#8FB996"
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path>
          </svg>
        </span>

        {#if is_age_restricted === true} (
          <span class="absolute p-1 top-0 left-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=""
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#8FB996"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              ></path>
              <path d="M12 9v2m0 4v.01"></path>
              <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
            </svg>
          </span>
        {/if}

        <div
          class={
            "transition ease-in-out delay-100 duration-300 group-hover:blur-sm group-hover:shadow-xl"
          }
        >
          <img
            class="object-contain h-48 w-96 pt-6"
            src={image_url}
            decoding="async"
            loading="lazy"
            width="200"
            height="200"
            alt={name}
          />
          {#if name.length > 30}
            <h3>{name.slice(0, 30) + "..."}</h3>
          {:else}
            <h3>{name}</h3>
          {/if}
          <p class="text-sm opacity-75">
            {weight} / {unit_price}€
          </p>
          <p class="text-sm opacity-75 inline">
            {brand}" "
          </p>
          {#if is_discount === true}
            <p
              class="text-2xl inline bg-eton px-1 rounded-xl">
              {price}€
            </p>
          {:else}
            <p class="text-2xl inline">{price}€</p>
          {/if}
        </div>
      </div>
      <div class="grid grid-cols-1 divide-y-4 divide-hunter">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
        >
          {#if store === "Prisma"}
            <img
              class={
                "absolute transition ease-in-out delay-100 opacity-0 group-hover:opacity-100 duration-300 -translate-y-[18rem] scale-75"
              }
              src={
                "https://ik.imagekit.io/1fjfd537a/tr:q-10/Prisma-Logo_6nALSoypn.webp"
              }
              width="200"
              height="200"
              alt="Prisma Logo"
            />
          {:else}
            <img
              class={
                "absolute transition ease-in-out delay-100 opacity-0 group-hover:opacity-100 duration-300 -translate-y-[18rem] scale-75"
              }
              src={
                "https://ik.imagekit.io/1fjfd537a/tr:q-10/Selver-logo_FO-ScSV-C.webp"
              }
              width="200"
              height="200"
              alt="Prisma Logo"
            />
          {/if}
        </a>
        <div
          class={
            "absolute transition ease-in-out delay-100 opacity-0 group-hover:opacity-100 duration-300 -translate-y-44 scale-75 min-w-full"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="translate-y-16 md:translate-x-14 translate-x-11 transition ease-in-out delay-100 hover:stroke-hunter hover:scale-110"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
</div>