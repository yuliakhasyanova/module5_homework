/*Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

let str = prompt('Введите строку, которую хотите перевернуть');
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//или

let str = "Hello";
let reverse = str.split('').reverse().join('');

console.log(reverse);

