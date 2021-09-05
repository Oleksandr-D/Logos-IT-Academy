// Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:
// — потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина,
//  висота та колір фону, а також позицію елемента
// — використовуйте jQuery easing для плавності анімації

$(function () {
    $('.ball').click(function () {
        let r, g, b;
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        $('.ball').animate({
            backgroundColor: `rgb(${r},${g},${b})`,
            width: `${r+10}`,
            height: `${g+10}`,
            left: `${r*5}`,
            top: `${b*2}`
        }, 2000, 'easeInOutBack')
    })
});