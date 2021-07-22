// Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:
// — при кліку на текст колір появляється блок з кольорами 
// — при кліку на текст зображення появляється блок з зображеннями
// — при кліку на самі блоки з кольорами змінюється колі фону
// — при кліку на самі блоки з зображеннями змінюється зображення фону
// — послідовність чи я задаю колір фону а потім зображення або навпаки не має значення

let bb = document.querySelector('body');
const show = document.querySelector('.wraper');
const show2 = document.querySelector('.wraper2');
function showCol() {
    show.setAttribute('style', 'display:flex');
    show2.setAttribute('style', 'display:none');
    let backCol = document.getElementsByClassName('bg-col');
    for (let i = 0; i < backCol.length; i++) {
        backCol[i].addEventListener('click', function () {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundColor = backCol[i].style.backgroundColor;
        });
    }
}
function showImg() {
    show2.setAttribute('style', 'display:flex');
    show.setAttribute('style', 'display:none');
    let backImg = document.getElementsByClassName('bg-img');
    for (let i = 0; i < backImg.length; i++) {
        backImg[i].addEventListener('click', function () {
            document.body.style.backgroundImage = backImg[i].style.backgroundImage;
            document.body.style.backgroundColor = '';
        });
    }
}