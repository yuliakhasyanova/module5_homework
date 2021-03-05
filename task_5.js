/* Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и
вывести в консоль каждый элемент массива. */

const arr = ['str', 5, {}, 77];
console.log(`Array size is ${arr.length}`);
arr.forEach(Element => {
	console.log(Element)
});

