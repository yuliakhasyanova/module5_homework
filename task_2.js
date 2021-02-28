/* Задание 2. Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
 Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён». */

result = 2;
console.log(typeof result);
if (typeof result !== "number" || isNaN(result)) {
    if (typeof result === "boolean") {
        console.log("X - логический тип данных");
    } else if (typeof result === "string") {
        console.log("X - строка");
    } else {
    	console.log("Тип не определён")
    }
} else {
    console.log("X - число");
} 

// или

let x = 1;
    switch(typeof x) {
    case "number":
    alert(x + "-" + " число")
    break;
    case "string":
    alert(x + "-" + " строка")
    break;
    case "boolean":
    alert(x + "-" + " логический тип данных");
    break;
    default:
    alert("Тип данных не определен")
}
