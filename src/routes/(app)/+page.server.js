export const load = async () => {
    const count = 15;
    let response = await fetch(`https://astronaut.grubby.workers.dev/api/v1/get_random/${count}`);
    response = await response.json();
    response = response.map((item) => {
        delete item.disregard;
        return item;
    });

    response.sort(() => 0.5 - Math.random());
    let selected = response.slice(0, count);
    selected = selected.sort((a, b) => b.price_difference_float - a.price_difference_float);

    return { feed: selected };
};
