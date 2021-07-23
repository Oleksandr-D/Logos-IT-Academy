// Необхідно реалізувати наступний функціонал як на відео input
//  (архів долучено до завдання), а саме:
// — при кліку кнопку Move текст з лівого інпута переноситься в правий,
//  причому якщо в лівому інпуті нічого немає, текст в правому не змінюється
// — при втраті фокусу в нижньому інпуті текст має переноситися 
// в його ж placeholder, причому якщо в інпуті нічого немає,
//  текст в placeholder не змінюється 

let f1 = document.forms.f1;
f1.move.addEventListener('click', function () {
    let login = f1.login.value;
    f1.reset();
    if (login != '') f1.movedLogin.placeholder = login;
});
let f2 = document.forms.f2;
f2.plh.addEventListener('change', function () {
    f2.plh.placeholder = f2.plh.value;
    f2.reset();
})
