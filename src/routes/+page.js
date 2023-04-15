/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
    setHeaders("Content-Type", "application/json");
    let products;
    const response = await fetch("https://astronaut.grubby.workers.dev/api/v1/get_random/15");
    products = await response.json();
    products.sort((a, b) => b.price_difference_float - a.price_difference_float);

    return { products };
}
