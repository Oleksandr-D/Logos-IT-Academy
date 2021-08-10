// 👉 Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// let arr = [5, 6, 7, 8, 9];
// let res = 0;
// arr.forEach(function(value,index,arr){
//      res += value;
// })
// console.log(res);
// ---------------------------------------------------------------------
// 👉 Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел. 
//     let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
// let arr = [5, 6, 7, 8, 9];
// let res = arr.map(value => value**2);
// console.log(res);
// ---------------------------------------------------------------------

// 👉 Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// let check = arr.every(ua => ua.country ==='Ukraine');
// console.log(check);
// ---------------------------------------------------------------------

// 👉 Завдання 4. Some
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// const check = arr.some(cub => cub.country === 'Cuba');
// console.log(check);   
//---------------------------------------------------------------------   

// 👉 Завдання 5. Filter
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви.
//  Залиште в ньому тільки підмасиви.
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// let newArr=[];
// arr.forEach(value => {
//     if (Array.isArray(value)) {
//         newArr.push(value);
//     }
// })
// console.log(newArr);
// ----------------------------------------------------------------


// 👉 Завдання 6. Reduce
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як 
// далі стоїть елемент з числом 0.
//     let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.
// let arr = [1, 2, 5, 0, 4, 5, 6];
// let check = true;
// let sum = arr.reduce((accum, elem) => {
//     if (elem === 0) {check = false;}
//     if (check === true) {accum += elem;}
//     return accum;
// }, 0);
// console.log(sum);
// ---------------------------------------------------------------------------
// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву
//  треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let elemCount = 0;
// let sum = arr.reduce((accum, elem) => {
//     if (accum <= 10) {accum += elem; elemCount++}
//     return accum;
// }, 0); 
// console.log(elemCount);
// console.log(sum);
// --------------------------------------------------------------------------

// 👉 Завдання 7. Будь яким методом
// Заданий масив з числами. Залиште в ньому тільки позитивні числа.
//  Потім вийміть квадратний корінь і цих чисел. 
//     let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.
let arr = [1, -2, 3, 0, 4, -5, 6, -11];
let posNum = arr.reduce((accum, val) =>{
    if (val >= 0){
let res = Math.sqrt(val)
accum.push(res);
    }
return accum;
},[]);
console.log(posNum);