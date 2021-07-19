// Необхідно реалізувати наступний функціонал як на відео keyboard, а саме:
// — потрібно створити вигляд клавіатури за допомогою html та css
// — за допомогою js та події клавіатури (keyboard event) необхідно
//  добавляти текст який ми вводимо а також підсвічути клавіші які натискаємо
// — мова клавіатури тільки одна – англійська
// — клавіша tab – має робити табуляцію
// — клавіша caps lock – має робити текст в верхньому регістрі
// — клавіша enter – має переносити текст на новий рядок
// — клавіша backspace – має видаляти текст по одній букві
// — клавіші shift – мають робити текст у верхньому регістрі
//  при утриманні даної клавіші

const screen = document.querySelector('.screen');
const button = document.querySelectorAll('.button');

window.addEventListener('keydown', function () {
    if (event.code == 'Tab') {
        let start = screen.selectionStart;
        let end = screen.selectionEnd;
        event.target.value = event.target.value.substring(0, start) + "\t" + event.target.value.substring(end);
        event.preventDefault();
    }
    for (const elem of button) {
        if (elem.textContent == event.key || elem.id == event.key) {
            elem.style.backgroundColor = 'black'
            elem.style.color = 'white'
            window.addEventListener('keyup', function () {
                elem.style.backgroundColor = 'white'
                elem.style.color = 'black'
            })
        }
    }
    // if (event.code == 'CapsLock') {
    //     for (let i = 0; i < button.length; i++) {
    //         const up = button[i].textContent
    //         up.toUpperCase()
    //         console.log(up)
    //         console.dir(event)
    //         console.log(typeof (up))
    //     }
    // }
})