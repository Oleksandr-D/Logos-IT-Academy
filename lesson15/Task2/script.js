// Потрібно скопіювати в документ html в тег body нижче вказаний код.
//  З допомогою команд jquery потрібно отримати текстове вмістиме 
//  кожного з елементів, які вказані в списку нижче. Отримані текстові
//   значення потрібно об’єднати в стрічку і вивести командою alert().
// 👉Список елементів:
// Тег span з id ”s1”;
// Тег b з класом ”s2”;
// Тег i, вкладений в блок “second”
// Тег q з вспливаючою підказкою
// Ссилка, яка відкривається в новій вкладці
// Тег span з класом extra, який є другий по послідовності на сторінці.

$(document).ready(function(){  
// console.log('--',$('#s1').text());
// console.log('--',$('.s2').text());
// console.log('--',$('#second > p > i').text());
// console.log('--',$('q[title="hello"]').text());
// console.log('--',$('[target="_blank"]').text());
// console.log('--',$('span[class="extra"]:eq(1)').text());
let res = $('#s1').text()+$('.s2').text()+$("#second > p > i").text()+
$('q[title="hello"]').text()+$('[target="_blank"]').text()+
$('span[class="extra"]:eq(1)').text();
alert(res);
})