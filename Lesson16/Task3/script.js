// Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:
// — потрібно при кліку на елемент щоб він анімовано летів до центру екрану
//  збільшуючи свій розмір
// — при ще одному кліку він повертався на свою позицію
// — використовуйте jQuery easing для плавності анімації

$(function () {
    //click on the colored squares
    let modWind = $('.modalW');
    $('.box').on('click', function () {
        $('.modalWraper').css({
            zIndex: 3
        });
        $('.modalWraper').animate({
            backgroundColor: 'rgba(102, 102, 102, 0.822)'
        }, 500);
        $(this).css({
            opacity: 0
        });
        modWind.css('background-color', $(this).css('background-color'));
        modWind.css('top', $(this).css('top'));
        modWind.css('left', $(this).css('left'));
        modWind.show().animate({
            top: (window.innerHeight - modWind.height()) / 6,
            left: (window.innerWidth - modWind.width()) / 3,
            width: '500px',
            height: '500px'
        }, 1000, 'easeOutBack')


    })
    //modal window
    //при кліку на модальне вікно як зробити перміщення (політ) квадратів як на відео,
    //  із центру на свою позицію?
    modWind.on('click', function () {
        // modWind.css('top', (window.innerHeight - modWind.height()) / 6);
        // modWind.css('left', (window.innerWidth - modWind.width()) / 3);
        $('.box').each(function (ind, elem) {
            // let ff = $(`.conteiner:eq(${ind} .box`).css()
            if (elem.style.opacity == 0) {
                modWind.css('top', $(this).css('top'));
                modWind.css('left', $(this).css('left'));
                // modWind.animate({
                //     top:$(this),
                //     left:$(this)
                // },100)
                
            }
        })
        
        $(this).animate({
            width: '175px',
            height: '175px',
            marginTop: '11px'
        }, 1000, 'easeInOutQuad', function () {
            modWind.hide()
            $('.modalWraper').animate({
                backgroundColor: 'rgb(255, 255, 255)'
            }, 500);
            $('.modalWraper').css({
                zIndex: -1
            })
            $('.box').css({
                opacity: 1
            })
        })
    })
});