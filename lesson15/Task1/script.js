// Необхідно реалізувати наступний функціонал як на відео iPhone, а саме:
// —  потрібно анімаційно зменшувати зелений блок відносно кількості часу 
// —  коли час завершився анімація не має вже запускатися

$(document).ready(function () {
    $('.block').animate({
        height: '0px'
    }, 1000 * 60, function () {
        $('.twoMin').addClass('hide');
        $('.oneMin').removeClass('hide');
        $(this).animate({
            height: '262px'
        }, 1000 * 60, function () {
            $('.zeroMin').removeClass('hide');
            $('.oneMin').addClass('hide');
        })
    })
})