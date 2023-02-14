export function setHighlighted() {
    let element = document.querySelector('.highlighted');
    element.classList.remove('opacity-0');
    element.classList.add('opacity-100');
    document.querySelector('input').focus();
}

export function unsetHighlighted() {
    document.querySelector('.highlighted').classList.remove('opacity-100');
    document.querySelector('.highlighted').classList.add('opacity-0');
}