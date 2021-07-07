// Необхідно реалізувати наступний функціонал як на відео color, а саме:
// — при першому наведенні мишки на блок колір фону має ставати червоний
// — при відведенні мишки блок має ставати знову фіолетовий
// — при другому наведенні – блок стає жовтим
// — при третьому – зеленим
// — при наступному наведенні все починається спочатку: червоний, жовтий, зелений
// — так має відбуватися безкінечно по колу

let elementIdx = 0;
let arr = ['red', 'yellow', 'green']
document.querySelector('.square').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = arr[elementIdx]
});
document.querySelector('.square').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'violet'
    elementIdx++;
    if (elementIdx >= arr.length) {
        elementIdx = 0;
    }
});
//чому event  заркреслений(Застарілий?)що використовувати замість  event?           