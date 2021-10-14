function addition() {
    let s = 0;
    return function inner(number) {
        s += number;
        console.log('Count =', s);
        if (s === 20) {
            console.log('really work?');
        }
    }
}
let sum = addition();
sum(3);
sum(5);
sum(228);
sum(-230);
sum(8 * 4 / 2 + 2 - 4);