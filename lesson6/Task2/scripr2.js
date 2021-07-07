// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// — по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// — при наведенні на блок його стиль змінюєть і текст стає наступним:
//  “Хочеш знати який”
// — при натисканні і утриманні клавіші мишки знову по блоку стиль 
// змінюється і текст стає наступним: “А я тобі не скажу”
// — при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// — при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”

document.querySelector('.square').addEventListener('mouseover', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black'
    event.target.textContent = 'Хочеш знати який'
})
document.querySelector('.square').addEventListener('mousedown', function () {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white'
    event.target.textContent = 'А я тобі не скажу'
})
document.querySelector('.square').addEventListener('mouseup', function () {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black'
    event.target.textContent = 'Хочеш знати який'
})
document.querySelector('.square').addEventListener('mouseout', function () {
    event.target.style.backgroundColor = 'orangered';
    event.target.style.color = 'purple'
    event.target.textContent = 'У мене є секрет!'
})