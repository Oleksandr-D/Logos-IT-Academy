// Необхідно реалізувати наступний функціонал як на відео DiscoBall,
//  а саме:
// — потрібно при загрузці сторінки елементу йому рандомно задавалася ширина,
//  висота, колір фону, колір бордера та тінь, а також позицію елемента
// — використовуйте jQuery easing для плавності анімації
// — використовуйте SetInterval для того щоб анімацію зробити безкінеченою

$(function () {
    setInterval(function () {
        let ball = $('.ball');
        let smolBoll = $('.smolBoll')
        let r, g, b;
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        ball.css('background', `rgb(${r},${g},${b})`);
        ball.css('border', `10px solid rgb(${r},${b},${g})`);
        ball.css('box-shadow', `0 0 40px 30px rgb(${b},${r},${g})`);
        // smolBoll.css('background', `rgb(${r*2},${g*2},${b/2})`);
        // smolBoll.css('border', `10px solid rgb(${b},${g},${r})`);
        // smolBoll.css('box-shadow', `0 0 40px 30px rgb(${g},${r},${b})`);
        smolBoll.css({
            border: `7px solid rgb(${b},${g},${r})`,
            boxShadow: `0 0 15px 15px rgb(${g},${r},${b})`
        })
        smolBoll.animate({
            backgroundColor: `rgb(${r*2},${g*2},${b/2})`,
            height: `${r/4}`,
            width: `${b/4}`
        }, 500,'easeInOutBack')
        ball.animate({
            top: `${b*2.4}px`,
            left: `${g*5.5}px`,
        }, 2000, 'easeInOutCubic')
    }, 500)
})
// smolBoll.css('left', (window.innerHeight - smolBoll.width(`${b/4+5}px`))); //change ball hight