// Необхідно реалізувати наступний функціонал як на відео Puzzle, а саме:
// — Необхідно розбити картинку на 16 рівних частин і помістити їх в блоки.
//  Розбивати картинку на кусочки можна за допомогою background-position
// — При кліку на кнопку Start game або при перетягуванні пазла на правий
//  блок(використовуємо drag & drop) має запуститися зворотній відлік.
//   Сама кнопка має заблокуватися.
// — Якщо час закінчився і ви не встигли скласти пазл має видати повідомлення 
// в модальному вікні: “It's a pity, but you lost”. Кнопка Check result має
//  заблокуватися
// — При кліку на кнопку Check result має видати повідомлення в модальному
//  вікні: “You still have time, you sure?” з часом який залишився.
// — При кліку на кнопку Check перевіряється чи добре складений пазл,
//  якщо так видає повідомлення: “Woohoo, well done, you did it!” 
//  в іншому варіанті “It's a pity, but you lost”. Кнопка Check result
//   має заблокуватися.
// — При кліку на кнопку Close закриває модальне вікно.
// — При кліку на кнопку New game скидує час і заново рандомно розставляє пазли.
//  Кнопка Start game має розблокуватися, а кнопка Check result має бути заблокована.

$(document).ready(function () {
    //puzzles function
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let check = true;
    $('.puzzleBoxes').sortable({
        connectWith: '#leftBlock, #rightBlock',
    });

    $('#rightBlock').droppable({
        accept: '.puzzle',
        activeClass: 'active',
    });
    //countdown functions
    let tm;
    let ts;
    let min = 2;
    let stopCount;
    // 'Start game!' button
    $('#start').on('click', function () {
        starts();
    })

    function starts() {
        let time = {
            mint: `${min-1}`,
            sec: 60,
        };
        stopCount = setInterval(function () {
            time.sec -= 1;
            if (time.sec <= 0) {
                time.sec = 59;
                time.mint -= 1;
            }
            tm = time.mint;
            ts = time.sec;
            if (tm < 0) {
                clearInterval(stopCount);
                $('.timer').attr('style', 'display:none');
                $('.timer2').attr('style', 'display:flex');
                $('.timer3').addClass('hide');
                $('.modalContainer').css('zIndex', '3');
                $('.modalContainer').animate({
                    backgroundColor: 'rgba(0, 0, 0, 0.762)'
                }, 1000);
                $('.modal').css('top', (window.innerHeight - $('.modal').height()) / 4);
                $('.modal').css('left', (window.innerWidth - $('.modal').width()) / 2);
                $('.mesage').text("It's a pity, but time is up");
                $('.modal').slideDown().animate({
                    height: '300px',
                }, 2000, 'easeOutElastic', function () {
                    $('#close').removeAttr('disabled');
                });
                $('#check').addClass('hide');
                $('#checkResult').prop('disabled', 'disabled');
                $('#start').prop('disabled', 'disabled');
                checking()
            }
            if (tm < 10) tm = '0' + tm;
            if (ts < 10) ts = '0' + ts;
            $('.timer').html(`${tm}:${ts}`);
            $('.timer3').html(`${tm}:${ts}`);
        }, 1000);
        $('#start').prop('disabled', 'disabled');
        $('#checkResult').removeAttr('disabled');
    }
    // new game count up if click
    $('#leftBlock').on('mouseup', function () {
        if ($('.timer').text() == '02:00') {
            starts();
        }
    })
    //'New game' button
    $('#newGame').click(function () {
        $('#start').removeAttr('disabled');
        clearInterval(stopCount);
        $('.timer').text('02:00');
        $('.timer2').attr('style', 'display:none');
        $('.timer').attr('style', 'display:flex');
        $('.iconWin').addClass('hide');
        $('.iconLost').addClass('hide');
        let puzzle = $('#rightBlock');
        let leftbl = $('#leftBlock');
        $('.puzzle').each(function (ind, elem) {
            leftbl.append(elem)
        })
        //random
        //location.reload();
        $('#leftBlock').html($("#leftBlock .puzzle").sort(function () {
            return Math.random() - 0.5;
        }));
    })

    function randomizer(min, max) {
        let rand = Math.round(min + Math.random() * (max - min));
        return rand;
    }
    console.log(randomizer(1, 16))
    // 'Check result' button
    $('#checkResult').click(function () {
        $('.timer3').removeClass('hide');
        $('#check').removeClass('hide');
        $('.modalContainer').css('zIndex', '3');
        $('.modalContainer').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.762)'
        }, 1000);
        $('.modal').css('top', (window.innerHeight - $('.modal').height()) / 4);
        $('.modal').css('left', (window.innerWidth - $('.modal').width()) / 2);
        // $('.mesage').text('You still have time, you sure?');
        $('.mesage').text('Ти впевнена, у тебе ще є час?');
        $('.timer3').html(`${tm}:${ts}`);
        $('.modal').slideDown().animate({
            height: '300px',
        }, 2000, 'easeOutElastic', function () {
            $('#close').removeAttr('disabled');
            $('#check').removeAttr('disabled');
        });

    })
    //'close' button
    $('#close').click(function () {
        $('.modal').slideUp().animate({
            height: '0px'
        }, 1000, 'easeOutBounce');
        $('.modalContainer').animate({
            backgroundColor: 'rgb(255, 255, 255)'
        }, 500, function () {
            $('.modalContainer').css('zIndex', '-1')
            $('#close').prop('disabled', 'disabled');
            $('#check').prop('disabled', 'disabled');

        });
    })
    //'check' button
    $('#check').on('click', function () {
        checking();
    })

    function checking() {
        for (let i = 0; i < $('.puzzle').length; i++) {
            if ($('.puzzle').eq(i).text() != numbers[i]) {
                check = false;
                break;
            }
        }
        if (check) {
            $('.timer3').addClass('hide');
            $('.mesage').text("Ураа! Перемога!");
            $('#check').addClass('hide');
            $('#checkResult').prop('disabled', 'disabled');
            $('#start').prop('disabled', 'disabled');
            $('.iconWin').removeClass('hide');
            clearInterval(stopCount);

        } else {
            // if lost
            $('.timer3').addClass('hide');
            // $('.mesage').text("It's a pity, but you lost");
            $('.mesage').text("Шкода, але ти програла");
            $('#check').addClass('hide');
            $('#checkResult').prop('disabled', 'disabled');
            $('#start').prop('disabled', 'disabled');
            $('.iconLost').removeClass('hide');
            clearInterval(stopCount);
        }
        check = true;
    };
});