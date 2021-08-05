// Необхідно реалізувати наступний функціонал як на відео timer&stopwatch, а саме:
// — повернути поточну дату в форматі: день.місяць.рік
// — повернути поточний час в форматі: година:хвилина:секунда
// — розробити секундомір в якого є можливість запуску, паузи,
//  запам’ятовування поточного часу та скидування часу
//  (мілісекунди не обов’язково реалізовувати)
// — розробити таймер в якого є можливість визначення часового
//  проміжку, а також запуск, пауза ти скидування часу

// start current date function
setInterval(() => {
    let dete = new Date();
    let day = dete.getDate();
    let month = dete.getMonth();
    let year = dete.getFullYear();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + (month + 1);
    document.querySelector('.date').innerHTML = `${day}.${month}.${year}`;
})
// start current time function
setInterval(() => {
    let currentD = new Date();
    let hours = currentD.getHours();
    let minutes = currentD.getMinutes();
    let seconds = currentD.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds}`
})
// stopwatch functions
let stDisp = document.querySelector('.stopwatchDisplay');
// start button for stopwatch
function startSw() {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0
    };
    stopTime = setInterval(function () {
        time.miliseconds += 10;
        if (time.miliseconds >= 1000) {
            time.miliseconds = 0;
            time.seconds += 1;
        }
        if (time.seconds >= 60) {
            time.seconds = 0;
            time.minutes += 1;

        }
        if (time.minutes >= 60) {
            time.minutes = 0;
            time.hours += 1;
        }
        let ss = time.seconds;
        if (ss < 10) ss = '0' + ss;
        let mm = time.minutes;
        if (mm < 10) mm = '0' + mm;
        let hh = time.hours;
        if (hh < 10) hh = '0' + hh;
        stDisp.innerHTML = `${hh}:${mm}:
        ${ss}:${time.miliseconds}`;
    }, 10);
    document.querySelector('#startSw').disabled = true;
}
// loop button for stopwatch
function loop() {
    document.querySelector('.loopDisplay').innerHTML += '<div>' + stDisp.innerHTML + '</div>';
}
//stop button for stopwatch
let stopTime;

function stopSw() {
    clearInterval(stopTime);
    document.querySelector('#startSw').disabled = false;
}
// reset button for stopwatch
function resetSw() {
    stDisp.innerHTML = '00:00:00:000';
    clearInterval(stopTime);
    document.querySelector('.loopDisplay').innerHTML = '';
    document.querySelector('#startSw').disabled = false;
}
// start countdown functions
let min = 25;
let minDisplay = document.querySelector('.minDisplay');
//button "+"
function plusCd() {
    min += 1;
    minDisplay.innerHTML = min
}
//button "-"
function minusCd() {
    min -= 1;
    minDisplay.innerHTML = min
}
let countDisplay = document.querySelector('.countDisplay');
let countDisplay2 = document.querySelector('.countDisplay2');
let stopCount;
// Countdown start button
function startCd() {
    let time = {
        mint: `${min-1}`,
        sec: 60,
    };
    stopCount = setInterval(function () {
        time.sec -= 1;
        if (time.sec <= 0) {
            time.sec = 60;
            time.mint -= 1;
        }
        let tm = time.mint;
        let ts = time.sec;
        if (tm < 0) {
            countDisplay.setAttribute('style', 'display:none');
            countDisplay2.setAttribute('style', 'display:flex');
            clearInterval(stopCount);
        }
        if (tm < 10) tm = '0' + tm;
        if (ts < 10) ts = '0' + ts;
        countDisplay.innerHTML = `${tm}:
        ${ts}`;
    }, 1000);
    document.querySelector('#startCd').disabled = true;
}
// Countdown stop button
function stopCd() {
    clearInterval(stopCount);
    document.querySelector('#startCd').disabled = false;
}
// Countdown reset button
function resetCd() {
    countDisplay.innerHTML = '00:00';
    clearInterval(stopCount);
    document.querySelector('#startCd').disabled = false;
    countDisplay.setAttribute('style', 'display:flex');
    countDisplay2.setAttribute('style', 'display:none');
}