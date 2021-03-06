/*
Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false 
в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
*/
let arr = [1, 1, 1, 1, 1];

for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i]) {
    console.log(false);
    break;
  } else if (i == arr.length - 1) {
    console.log(true);
  }
}

// или


let arr = [1, 2, 7, 0, 5, 12, 98]
let element = arr[0]
let result = arr.every(function(item){
  return item === element
})
console.log(result)