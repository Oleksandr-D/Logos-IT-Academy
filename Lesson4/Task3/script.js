// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова,
// каво-машина, які будуть наслідувати базовий функціонал CoffeeMake,
// а також мати власний. Використовує cучасний class.

class CoffeeMake {
    #price = 1200;
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.#price = price;
    }
    on() {
        console.log('turn ON')
    }
    off() {
        console.log('turn OFF')
    }
}
class DripCoffeeMaker extends CoffeeMake {
    type = 'Kapelna';
    on() {
        super.on();
        console.log("it's Super ON!")
    }
    boil_water() {
        console.log('Boil Water');
    }
    timer() {
        console.log('Timer "Beep, beep!"');
    }
    heat_retention() {
        console.log('heat retention');
    }
}
class RigkovaCoffeeMaker extends DripCoffeeMaker {
    type = 'Rijkova'
    vapor_pressure() {
        console.log('Steam pressure "sshhhhh!"');
    }
    creamy_foam() {
        console.log('creamy foam');
    }
    auto_shutdown() {
        console.log('auto shutdown');
    }
}
class CoffeeMachine extends RigkovaCoffeeMaker {
    type = 'kavomashina'
    grinding_coffee_beans() {
        console.log('grinding coffee beans"vjjjjj!"');
    }
    cappuccino_maker() {
        console.log('cappuccino ready');
    }
    coffee_strength_adjustment() {
        console.log('select coffee strength');
    }
}
let drip = new DripCoffeeMaker('Delongi', 'IPC18',5500);
let rig = new RigkovaCoffeeMaker();
let kavoMash = new CoffeeMachine('Saeco', 'Abc321', 22000);
console.log(drip);
console.log(rig);
console.log(kavoMash);
kavoMash.off();
kavoMash.on();