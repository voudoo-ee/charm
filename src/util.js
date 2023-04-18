export function shortenName(name, length = 20) {
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
