// Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку...

let firstNameRegExp = /^[a-zA-Z]{2,20}$/;
let lastNameRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /^[a-zA-Z0-9_.&#]+[^\s@]+@[^\s@]+[.][^\s@\W]{1,3}$/;
let passRegExp = /^[a-zA-Z0-9]{8,15}$/;
let getID = id => document.getElementById(id);
// input field validation
getID('firstName').oninput = function () {
    let testName = firstNameRegExp.test(getID('firstName').value);
    if (testName) {
        this.style.boxShadow = '0 0 5px 5px green';
    } else {
        this.style.boxShadow = '0 0 5px 5px red';
    }
}
getID('lastName').oninput = function () {
    let testLastN = lastNameRegExp.test(getID('lastName').value);
    if (testLastN) {
        this.style.boxShadow = '0 0 5px 5px green';
    } else {
        this.style.boxShadow = '0 0 5px 5px red';
    }
}
getID('email').oninput = function () {
    let testEmail = emailRegExp.test(getID('email').value);
    if (testEmail) {
        this.style.boxShadow = '0 0 5px 5px green';
    } else {
        this.style.boxShadow = '0 0 5px 5px red';
    }
}
getID('password').oninput = function () {
    let testPass = passRegExp.test(getID('password').value);
    if (testPass) {
        this.style.boxShadow = '0 0 5px 5px green';
    } else {
        this.style.boxShadow = '0 0 5px 5px red';
    }
}
//button activation
getID('form').oninput = function () {
    const fN = getID('firstName');
    const lN = getID('lastName');
    const em = getID('email');
    const pass = getID('password');
    const ch = getID('check');
    if (fN.validity.valid && lN.validity.valid && em.validity.valid &&
        pass.validity.valid && ch.validity.valid) {
        getID('signUp').disabled = false;
    } else {
        getID('signUp').disabled = true;
    }
}
// Submit form. button "signUp"
getID('form').onsubmit = function () {
    event.preventDefault();
    document.querySelector('.conteiner2').classList.remove('hide');
    document.querySelector('.conteiner1').classList.add('hide');
}
