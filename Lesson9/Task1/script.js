// Необхідно реалізувати наступний функціонал як на відео scroll, а саме:
// — при скролі текст “scroll down” збільшує розмір тексту
// — далі блок з текстом “slide from left” зміщує чуть позицію вправо
//  а також збільшується лінія підкреслення
// — далі картинка(можна використати будь яку) зміщується вліво
// — ну і в кінці текст “scroll up” зменшує розмір тексту
// — при кліку на “scroll down” відбувається автоматичний скрол 
// до блоку “slide from left”
// — при кліку на “scroll up” відбувається автоматичний скрол
//  до верху сторінки

const sl1Text = document.querySelector('.sl1Text');
const slLeft = document.querySelector('.slLeft');
const line = document.querySelector('.line');
const foto = document.querySelector('.foto');
const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 50 && window.scrollY <= 250) {
        sl1Text.style.fontSize = `${window.scrollY/2}px`;
    }
    if (window.scrollY >= 250 && window.scrollY <= 600) {
        slLeft.style.left = `${window.scrollY/4}px`;
        line.style.left = `${window.scrollY/4}px`;
        line.style.width = `${window.scrollY}px`
    }
    if (window.scrollY >= 500 && window.scrollY <= 1100) {
        foto.style.right = `${window.scrollY/4}px`;
    }
    if (window.scrollY >= 1200 && window.scrollY <= 1400) {
        scrollUp.style.fontSize = `${400-window.scrollY/4}px`;
    }
});
scrollUp.addEventListener('click', () => {window.scroll({
top:0, behavior:'smooth'})});
sl1Text.addEventListener('click', () =>{slLeft.scrollIntoView({behavior:'smooth'})});
