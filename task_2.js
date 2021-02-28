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