export function shortenName(name, length = 20) {
    if (typeof name !== "string") {
        throw new Error("Name must be a string");
    }

    if (name.length > length) {
        return name.slice(0, length) + "...";
    } else {
        return name;
    }
}

export function isMobileUserAgent() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

export function randomPick(choices) {
    const args = Array.from(choices);
    return args[Math.floor(Math.random() * args.length)];
}
