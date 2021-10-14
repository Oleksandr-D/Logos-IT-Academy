let balanse = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;
let beerCount = 0;
let wineCount = 0;
let pepsiCount = 0;
let beerPrise = 30;
let winePrise = 150;
let pepsiPrise = 20;

function sellBeer(count) {
    if (beer >= count && count <= 100) {
        beer -= count;
        balanse += count * beerPrise;
        beerCount = count * beerPrise
        return `Пиво: ${count}шт. Ціна-${beerCount}грн.`
    } else {
        return `Error: Недостатня кількість пива для продажу.Залишилось ${beer} штук.`
    }
}

function sellWine(count) {
    if (count <= 50) {
        wine -= count;
        balanse += count * winePrise;
        wineCount = count * winePrise;
        return `Вино: ${count}шт. Ціна-${wineCount}грн.`
    }
    return `Error: Недостатня кількість вина для продажу. Залишилось ${wine} штук.`
}

function sellPepsi(count) {
    if (count <= 80) {
        pepsi -= count;
        balanse += count * pepsiPrise;
        pepsiCount = count * pepsiPrise;
        return `Пепсі: ${count}шт. Ціна-${pepsiCount}грн.`
    }
    return `Error: Недостатня кількість пепсі для продажу.Залишилось ${pepsi} штук.`
}

function total() {
    return `Всього: ${beerCount+wineCount+pepsiCount} гривень.`
}

function checkBalanse() {
    return `Загальний баланс: ${balanse}`
}
export {
    sellBeer,
    sellWine,
    sellPepsi,
    total,
    checkBalanse
};