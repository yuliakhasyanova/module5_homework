/* Задание 8.
   Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
   Используйте шаблонные строки. */


let map = new Map([
    ["big", "small"],
    ["dog", "cat"],
    ["cat", "mouse"],
    ["black", "white"]
]);

for (let name of map.keys()) {
    let x = map.get(name);
    console.log(`Ключ - ${name}, значение - ${x}`);
}
