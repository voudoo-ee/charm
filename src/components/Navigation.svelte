<nav class="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="../logo-black.png" class="mr-3 h-16" alt="Voudoo Logo" />
            <span class="self-center whitespace-nowrap text-2xl font-gilroyBold text-black"
                >Voudoo</span
            >
        </a>
        <div class="flex md:order-2">
            <button
                type="button"
                class="font-large mr-3 rounded-lg bg-darker px-4 py-2 text-center text-sm text-white hover:bg-evendarker focus:outline-none focus:ring-4 focus:ring-dark md:mr-0"
                on:click={() => {
                    window.location.href = "/404";
                }}
                >Get started</button
            >
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    /></svg
                >
            </button>
        </div>
        <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
        >
            <ul
                class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0"
            >
                <li>
                    <a
                        href="/"
                        class="block rounded py-2 pl-3 pr-4 text-gray-900 font-interMedium md:bg-transparent md:p-0"
                        aria-current="page">Home</a
                    >
                </li>
                <li>
                    <a
                        href="/404"
                        class="block rounded py-2 pl-3 pr-4 text-gray-900 font-interMedium hover:bg-gray-100 md:p-0"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        href="/404"
                        class="block rounded py-2 pl-3 pr-4 text-gray-900 font-interMedium hover:bg-gray-100 md:p-0"
                        >Services</a
                    >
                </li>
                <li>
                    <a
                        href="/404"
                        class="block rounded py-2 pl-3 pr-4 text-gray-900 font-interMedium hover:bg-gray-100 md:p-0"
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>