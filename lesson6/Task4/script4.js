// Необхідно реалізувати наступний функціонал як на відео text, а саме:
// — на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
// — потрібно щоб в при кліку на поточний пункт замалювався тим кольором,
//  який в ньому записаний.
// — постарайтесь зробити даний функціонал використовуючи тільки одну функцію

document.querySelector('.wraper').addEventListener('click', getColor);
function getColor() {
    if (event.target.className == 'red') {
        event.target.style.color = 'red'
    }
    if (event.target.className == 'yellow') {
        event.target.style.color = 'yellow'
    }
    if (event.target.className == 'green') {
        event.target.style.color = 'green'
    }
    if (event.target.className == 'blue') {
        event.target.style.color = 'blue'
    }
    if (event.target.className == 'orange') {
        event.target.style.color = 'orange'
    }
    if (event.target.className == 'gray') {
        event.target.style.color = 'gray'
    }
};