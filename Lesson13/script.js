// Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку як на відео
//  validateRegisterForm. 
// — Ім’я та прізвище: може бути слово англійською з великої або маленької букви
//  і не більше 20. Цифр і інші символи не допускаються.
// — Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги
//  наступні(будь-яка кількість букв, цифр,
//      тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).
// — Пароль: Від 8 до 15 символів можуть бути букви та цифри.
// — Чекбокс: якщо всі поля правильно заповнені, то при кліку на чекбокс кнопка
//  Sign Up розблоковується
// — Sign Up: при кліку на дану кнопку відкривається модальне вікно з повідомленням
//  про успішну реєстрацію
// — Start exploring: при кліку на дану кнопку закривається модальне вікно,
//  а також всі поля форми зачищуються

let firstNameRegExp = /^[a-zA-Z]{2,20}$/;
let lastNameRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /^[a-zA-Z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
let passRegExp = /^[a-zA-Z0-9]{8,15}$/;
let getID = id => document.getElementById(id);
// input field validation
getID('firstName').oninput = function () {
    let testName = firstNameRegExp.test(getID('firstName').value);
    if (testName) {
        getID('firstName').style.boxShadow = '0 0 5px 5px green';
    } else {
        getID('firstName').style.boxShadow = '0 0 5px 5px red';
    }
}
getID('lastName').oninput = function () {
    let testLastN = lastNameRegExp.test(getID('lastName').value);
    if (testLastN) {
        getID('lastName').style.boxShadow = '0 0 5px 5px green';
    } else {
        getID('lastName').style.boxShadow = '0 0 5px 5px red';
    }
}
getID('email').oninput = function () {
    let testEmail = emailRegExp.test(getID('email').value);
    if (testEmail) {
        getID('email').style.boxShadow = '0 0 5px 5px green';
    } else {
        getID('email').style.boxShadow = '0 0 5px 5px red';
    }
}
getID('password').oninput = function () {
    let testPass = passRegExp.test(getID('password').value);
    if (testPass) {
        getID('password').style.boxShadow = '0 0 5px 5px green';
    } else {
        getID('password').style.boxShadow = '0 0 5px 5px red';
    }
}
//button activation on check
getID('check').onclick = function () {
    let testName = firstNameRegExp.test(getID('firstName').value);
    let testLastN = lastNameRegExp.test(getID('lastName').value);
    let testEmail = emailRegExp.test(getID('email').value);
    let testPass = passRegExp.test(getID('password').value);
    if (testName && testLastN && testEmail && testPass && event.target.checked) {
        getID('signUp').disabled = false;
    } else {
        getID('signUp').disabled = true;
    }
}
// modal window
getID('form').onsubmit = function () {
    event.preventDefault();
    document.querySelector('.conteiner2').classList.remove('hide');
    document.querySelector('.conteiner1').classList.add('hide');
}

//  input field validation
// let form = getID('form')
// for (const n of form) {
//     n.addEventListener('input', function () {
//         let testName = firstNameRegExp.test(getID('firstName').value);
//         let testLastN = lastNameRegExp.test(getID('lastName').value);
//         let testEmail = emailRegExp.test(getID('email').value);
//         let testPass = passRegExp.test(getID('password').value);
//         if (testName) {
//             getID('firstName').style.boxShadow = '0 0 5px 5px green';
//         }
//         if (testLastN) {
//             getID('lastName').style.boxShadow = '0 0 5px 5px green';
//         }
//         if (testEmail) {
//             getID('email').style.boxShadow = '0 0 5px 5px green';
//         }
//         if (testPass) {
//             getID('password').style.boxShadow = '0 0 5px 5px green';
//         }
//         else {
//             n.style.boxShadow = '0 0 5px 5px red';
//         }
//     })
// }