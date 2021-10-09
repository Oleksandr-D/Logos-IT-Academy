// Реалізуйте клас MyString, який матиме наступні методи:
// метод reverse(), який параметром приймає рядок,
// а повертає її в перевернутому вигляді, метод ucFirst(),
// який параметром приймає рядок, а повертає цю ж рядок,
// зробивши її першу букву заголовної та метод ucWords(),
// який приймає рядок і робить капіталізації першої літери
// кожного слова цього рядка. Використовує cучасний class.
// Наш клас повинен працювати так:
// const str = new MyString();
// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

class MyString {
    reverse(string) {
        let rev = string.split('').reverse().join('');
        return rev
    };
    ucFirst(name) {
        let newName = name.charAt(0).toUpperCase()
        for (let i = 1; i < name.length; i++) {
            newName += name.charAt(i).toLowerCase()
        }
        return newName
    };
    ucWords(words) {
        let newWords = words.split(' ')
        let rez = '';
        for (let i = 0; i < newWords.length; i++) {
            rez += newWords[i].charAt(0).toUpperCase() + newWords[i].slice(1) + ' ';
        }
        return rez
    }
};
const str = new MyString();
console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal, karpaty lviv')); //виведе 'Arsenal Arsenal Arsenal'