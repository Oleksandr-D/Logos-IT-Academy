// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// — на сторінці знаходяться три пустих блоки div. 
// — при кліку на блок виводить функція prompt() в яку ми вводиm url адресу зображення
// — це зображення стає фоном для цього конкретного блоку

let userUrl = ``;
document.querySelector('.b1').addEventListener('click', function () {
   userUrl = prompt(`Введіть адресу зображкння`);
   event.target.style.backgroundImage = `url(${userUrl})`
})
document.querySelector('.b2').addEventListener('click', function () {
   userUrl = prompt(`Введіть адресу зображкння`);
   event.target.style.backgroundImage = `url(${userUrl})`
})
document.querySelector('.b3').addEventListener('click', function () {
   userUrl = prompt(`Введіть адресу зображкння`);
   event.target.style.backgroundImage = `url(${userUrl})`
})