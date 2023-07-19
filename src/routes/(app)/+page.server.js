export const load = async () => {
    const count = 15;
    let response = await fetch(`https://astronaut.grubby.workers.dev/api/v1/get_random/${count}`);
    response = await response.json();
    response = response.map((item) => {
        delete item.disregard;
        delete item.ean;
        delete item.category;
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
