// Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:
// — при кліку на текст колір появляється блок з кольорами 
// — при кліку на текст зображення появляється блок з зображеннями
// — при кліку на самі блоки з кольорами змінюється колі фону
// — при кліку на самі блоки з зображеннями змінюється зображення фону
// — послідовність чи я задаю колір фону а потім зображення або навпаки не має значення
let bb = document.querySelector('body');
const show = document.querySelector('.wraper');
function showCol() {
    show.removeAttribute('style');
    document.querySelector('.brown').classList.remove('img1')
    document.querySelector('.green').classList.remove('img2')
    document.querySelector('.grey').classList.remove('img3')
    document.querySelector('.red').classList.remove('img4')
    document.querySelector('.blue').classList.remove('img5')
    document.querySelector('.violet').classList.remove('img6')
    document.querySelector('.yellow').classList.remove('img7')
    document.querySelector('.aqua').classList.remove('img8')
    document.querySelector('.hotpink').classList.remove('img9')
    document.querySelector('.brown').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'brown';
    })
    document.querySelector('.green').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'green';
    })
    document.querySelector('.grey').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'grey';
    })
    document.querySelector('.red').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'red';
    })
    document.querySelector('.blue').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'blue';
    })
    document.querySelector('.violet').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'violet';
    })
    document.querySelector('.yellow').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'yellow';
    })
    document.querySelector('.aqua').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'aqua';
    })
    document.querySelector('.hotpink').addEventListener('click', function () {
        bb.removeAttribute('style');
        bb.style.backgroundColor = 'hotpink';
    })
}

function showImg() {
    show.removeAttribute('style');
    document.querySelector('.brown').classList.add('img1');
    document.querySelector('.green').classList.add('img2');
    document.querySelector('.grey').classList.add('img3');
    document.querySelector('.red').classList.add('img4');
    document.querySelector('.blue').classList.add('img5');
    document.querySelector('.violet').classList.add('img6');
    document.querySelector('.yellow').classList.add('img7');
    document.querySelector('.aqua').classList.add('img8');
    document.querySelector('.hotpink').classList.add('img9');
    document.querySelector('.img1').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://oir.mobi/uploads/posts/2021-03/1616525300_1-p-krutoi-fon-1.jpg)';
    })
    document.querySelector('.img2').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://avatanplus.com/files/resources/original/59a80db989d9e15e38759cdd.jpg)';
    })
    document.querySelector('.img3').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://luxfon.com/images/201203/luxfon.com_8367.jpg)';
    })
    document.querySelector('.img4').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://wallpapers-fenix.eu/full/180624/000020532.jpg)';
    })
    document.querySelector('.img5').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://p4.wallpaperbetter.com/wallpaper/272/773/203/beautiful-nature-for-desktop-background-1920x1080-wallpaper-preview.jpg)';
    })
    document.querySelector('.img6').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://s1.1zoom.ru/big0/244/Scenery_Fields_Sky_Roads_508215.jpg)';
    })
    document.querySelector('.img7').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://images8.alphacoders.com/383/383294.jpg)';
    })
    document.querySelector('.img8').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://i.obozrevatel.com/gallery/2020/9/22/kartinka-osen-list-rosa.png)';
    })
    document.querySelector('.img9').addEventListener('click', function () {
        bb.style.backgroundImage = 'url(https://storge.pic2.me/c/1360x800/362/584870af92b6d.jpg)';
    })
}

