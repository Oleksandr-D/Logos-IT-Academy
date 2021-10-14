// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка,
//  весь зв’язок з html, тобто кліки, зміна даних в html робити там не потрібно.
//   Все має працювати як на відео shopsModule. Можете добавити додатковий
//    функціонал від себе. В середині модуля використовуємо тільки логіку
//    (змінні, функції і т.д.), ніякого зв’язку з DOM не має бути.
import * as shop from './shopsModule.js';
console.log(shop.sellBeer(10));
console.log(shop.sellWine(5));
console.log(shop.sellPepsi(10));
console.log(shop.total());
console.log(shop.sellBeer(91));
console.log(shop.checkBalanse());
console.log(shop.sellBeer(10));
console.log(shop.checkBalanse());