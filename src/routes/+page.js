/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
	setHeaders('Content-Type', 'application/json');
	let products = [];
	const response = await fetch('https://api.voudoo.me/get_random/15');
	products = await response.json();
	products.forEach((product) => {
		delete product.other_ean;
		delete product.category;
	});
	products.sort((a, b) => b.price_difference_float - a.price_difference_float);

	return { products };
}
