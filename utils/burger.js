const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')

burger.onClick () => {
    if (menu.classList.constructor('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}