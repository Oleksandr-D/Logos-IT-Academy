// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: 
// on(),off(). Далі напишіть ще методи для 3х типів кавоварок: 
// капельна, ріжкова, каво-машина, які будуть наслідувати 
// базовий функціонал CoffeeMake, а також мати власний. 
// Використовує класи до es6 стандарту.

function CoffeeMake() {};
CoffeeMake.prototype.on = function () {
    console.log('turn ON')
}
CoffeeMake.prototype.off = function () {
    console.log('turn OFF')
}
//крапельна
function DripCoffeeMaker(type = 'Kapelna', model = 'ICM1721') {
    this.type = type;
    this.model = model;
}
DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constuctor = DripCoffeeMaker;

DripCoffeeMaker.prototype.boil_water = function () {
    console.log('Boil Water');
}
DripCoffeeMaker.prototype.timer = function () {
    console.log('Timer "Beep, beep!"');
}
DripCoffeeMaker.prototype.heat_retention = function () {
    console.log('heat retention');
}
//ріжкова
function RigkovaCoffeeMaker(type = '', model = '') {
    this.type = type;
    this.model = model;
}
RigkovaCoffeeMaker.prototype = Object.create(DripCoffeeMaker.prototype);
RigkovaCoffeeMaker.prototype.constuctor = RigkovaCoffeeMaker;

RigkovaCoffeeMaker.prototype.vapor_pressure = function () {
    console.log('Steam pressure "sshhhhh!"');
}
RigkovaCoffeeMaker.prototype.creamy_foam = function () {
    console.log('creamy foam');
}
RigkovaCoffeeMaker.prototype.auto_shutdown = function () {
    console.log('auto shutdown.');
}
//кавомашина
function CoffeeMachine(type, model) {
    this.type = type;
    this.model = model;
}
CoffeeMachine.prototype = Object.create(RigkovaCoffeeMaker.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMachine;

CoffeeMachine.prototype.grinding_coffee_beans = function () {
    console.log('grinding coffee beans"vjjjjj!"');
}
CoffeeMachine.prototype.cappuccino_maker = function () {
    console.log('cappuccino ready');
}
CoffeeMachine.prototype.coffee_strength_adjustment = function () {
    console.log('select coffee strength');
}

let drip = new DripCoffeeMaker();
let rigkova = new RigkovaCoffeeMaker('Rigkova','qwerty');
let kavomashuna = new CoffeeMachine('Kavomashuna','abc123');
console.log(drip);
console.log(rigkova);
console.log(kavomashuna);
rigkova.timer();
kavomashuna.grinding_coffee_beans();
kavomashuna.on();
kavomashuna.off();
kavomashuna.vapor_pressure();
console.log(kavomashuna instanceof CoffeeMake);