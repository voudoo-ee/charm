import prisma from "$lib/prisma.js";
import { randomPick } from "$lib/util.js";

export const load = async () => {
    const count = 15;
    const minPrice = Math.max(Math.random() * 5, 1);
    const maxPrice = Math.random() * 10 + Math.min(minPrice * 2, 5);

    // Pick a random field to order by and a random direction to order in.
    const orderBy = randomPick(["ID", "price"]);
    const orderDir = randomPick(["asc", "desc"]);

    // We pick 3x as many products as we need to return to ensure we have enough.
    let response = await prisma.products.findMany({
        where: {
            price_difference_float: { gt: 0 },
            price: { gt: minPrice, lt: maxPrice }
        },
        take: count * 3,
        orderBy: { [orderBy]: orderDir }
    });

    // If this query didn't return anything, we can't do anything else.
    if (response.length === 0) return { feed: [] };

    // Remove the "disregard" field.
    response = response.map((item) => {
        delete item.disregard;
        return item;
    });

    return { feed: selectAndSort(response, count) };
};

const selectAndSort = (response, count) => {
    response.sort(() => 0.5 - Math.random());
    let selected = response.slice(0, count);
    selected = selected.sort((a, b) => b.price_difference_float - a.price_difference_float);
    return selected;
};
