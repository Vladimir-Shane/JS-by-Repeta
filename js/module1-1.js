/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

let base = prompt('Enter the base')
base = Number(base)
// console.log(typeof base);
let power = prompt('Enter the power');
power = Number(power)
const result = Math.pow(base, power);
console.log(result);
alert(`Your result is : ${result}`);