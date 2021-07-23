// Необхідно реалізувати наступний функціонал як на відео signUp, а саме:
// — заповнити всі поля форми: first name, second name, email
// — вибрати стать: man, woman
// — вибрати position: Fronted, Backend, QC/QA
// — поставити галочку навпроти пункту: I agree…
// — після чого клікаємо на кнопку Sign Up і переходимо до блоку 
// профайлу користувача (примітка: без галочки напроти I agree… 
//     кнопка має бути не активна)
// — на блоці профайлу має бути вся інформація яку ми заповнювали,
//  а також картинка чоловіча чи жіноча відносно статі яку ми обирали
// — при кліку на Sign Out ми повертаємося на блок створення акаунту,
//  поля в блоці мають бути зачищені

const conteiner = document.querySelector('.conteiner');
const containerInfo = document.querySelector('.containerInfo');
const manFoto = document.querySelector('.manFoto');
const womanFoto = document.querySelector('.womanFoto');

function showInfo() {
    event.preventDefault();
    conteiner.setAttribute('style', 'display:none');
    containerInfo.setAttribute('style', 'display:flex');
    let fName = createAccount.fName.value;
    let seName = createAccount.seName.value;
    let mail = createAccount.mail.value;
    let rad = createAccount.rad.value;
    let pos = createAccount.pos.value;
    document.querySelector('.userName').textContent = fName;
    document.querySelector('.userSecName').textContent = fName + ' ' + seName;
    document.querySelector('.userMail').textContent = mail;
    document.querySelector('.userPosition').textContent = pos;
    if (rad == 'man') {
        manFoto.setAttribute('style', 'display:flex');
    } else {
        womanFoto.setAttribute('style', 'display:flex');
    }
}