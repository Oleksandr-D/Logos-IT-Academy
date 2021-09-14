// Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:
// — потрібно при кліку на елемент щоб він анімовано летів до центру екрану
//  збільшуючи свій розмір
// — при ще одному кліку він повертався на свою позицію
// — використовуйте jQuery easing для плавності анімації

$(function () {
    let topPosition; //keep the original position of the box
    let leftPosition;
    //click on the colored squares
    $('.box').on('click', function () {
        $('.modalWraper').css({
            zIndex: 3
        }).animate({
            backgroundColor: 'rgba(102, 102, 102, 0.822)'
        }, 500);
        $(this).css({
            opacity: 0
        });
        topPosition = $(this).offset().top;
        leftPosition = $(this).offset().left;
        $('.modalW').css({
            top: topPosition,
            left: leftPosition,
            backgroundColor: $(this).css('background-color'),
            display: 'block'
        }).animate({
            top: (window.innerHeight - 500) / 2,
            left: (window.innerWidth - 500) / 2,
            width: '500px',
            height: '500px'
        }, 1000, 'easeOutBack')
    })
    //modal window
    $('.modalW').on('click', function () {
        $(this).animate({
            width: '175px',
            height: '175px',
            top: topPosition,
            left: leftPosition
        }, 1000, 'easeInOutQuad', function () {
            $('.modalW').hide();
            $('.modalWraper').animate({
                backgroundColor: 'rgb(255, 255, 255)'
            }, 500).css({
                zIndex: -1
            })
            $('.box').css({
                opacity: 1
            })
        })
    })
});