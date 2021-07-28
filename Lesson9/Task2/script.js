// Необхідно реалізувати наступний функціонал як на відео taskList, а саме:
// — при кліку кнопку Додати додававляти нове завдання в список завдань
// — якщо при добавлянні поле пусте має вивести повідомлення у
//  модальному вікні про попередження: “Пусте поле не можна добавити”
// — в списку завдань при кліку на чекбокс завдання має видалятися зі списку
// — якщо залишилося 1не завдання то його не можна видалити
// — якщо захочемо видалити то має вивести повідомлення у 
// модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”

const taskList = document.querySelector('.taskList');
const modalWindow = document.querySelector('.modalWindow');
const modalWindow2 = document.querySelector('.modalWindow2');

function addTasks() {
    let taskText = addTask.taskText.value;
    if (taskText == '') {
        modalWindow2.setAttribute('style', 'display: flex');
        addTask.add.setAttribute('style', 'display: none');
        addTask.taskText.setAttribute('style', 'display: none');
    } else {
        taskList.insertAdjacentHTML('beforeend', `<li><input type="checkbox" name="${taskText}">${taskText}</li>`)
        addTask.reset();
    }
}
document.querySelector('.close').addEventListener('click', () => {
    modalWindow.setAttribute('style', 'display: none');
    addTask.add.setAttribute('style', 'display: block');
    addTask.taskText.setAttribute('style', 'display: block');
})
document.querySelector('.close2').addEventListener('click', () => {
    modalWindow2.setAttribute('style', 'display: none');
    addTask.add.setAttribute('style', 'display: block');
    addTask.taskText.setAttribute('style', 'display: block');
})
function removeCheck() {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        if ((li.length <= 1) && event.target.checked) {
            modalWindow.setAttribute('style', 'display: flex');
        }
        if (event.target.checked && li.length > 1) {
            event.target.parentElement.remove()
        }  
    }
}