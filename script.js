function toggleMenu() {
    document.getElementById('menu').classList.toggle('open');

    const burger = document.querySelector('.burger');
    if (burger.textContent === '☰') {
        burger.textContent = '✕';
    } else {
        burger.textContent = '☰';
    }
}