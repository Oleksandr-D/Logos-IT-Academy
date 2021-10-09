// Реалізуйте клас Worker(Працівник), який буде мати такі властивості:
// firstName(ім'я), secondName (прізвище), rate(ставка за день роботи),
// days(кількість відпрацьованих днів). Також клас повинен мати
// метод getSalary(), який буде виводити зарплату працівника.
// Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
// Ось так повинен працювати наш клас:
// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31
// За допомогою нашого класу створіть двох робочих і знайдіть
// суму їх зарплат. Використовує cучасний class.

class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31
const worker2 = new Worker('Pablo', 'Pedro', 11, 21);
console.log(worker2);
console.log(worker2.getSalary());
console.log('The sum salary of two employees', worker2.getSalary() + worker.getSalary());