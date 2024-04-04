// function logger(callback) {
//     console.log('Chạy vào hàm logger')
// 	callback();
// }

// logger(test)

// setTimeout(callback, miliseconds)
// setTimeout(function (){
//     console.log('đây là hàm callback trong setTimeout')
// }, 10000)

// setInterval(callback, miliseconds)
// const timer = setInterval(test, 2000);

// let count = 0;

// function test() {
// 	console.log('Day la function test');
// 	count = count + 1;
// 	console.log('count: ', count);

// 	if (count === 5) {
// 		clearInterval(timer);
// 	}
// }

// function testAbc(callback) {
// 	console.log('function testAbc');
// 	callback('Dũng');
// }

// function testCallback(name) {
// 	console.log('Đây là hàm testCallback');
// 	console.log('Đây là giá trị parameter: ', name);
// }
// Cách 1
// testAbc(testCallback);

// Cách 2
// testAbc(function (name) {
// 	console.log('Đây là hàm testCallback');
// 	console.log('Đây là giá trị parameter: ', name);
// });

// Viết 1 function tính tổng 2 số
// syntax function thông thường
// function calSum(a, b) {
// 	return a + b;
// }

// name_function: calSum
// paramters: a,b
// logic thực thi trong hàm: return a + b;

// Syntax arrow function:
// const/var/let name_function = (paramters) => {
// 	// logic thực trong hàm
// }

// const calSum = (a, b) => a + b;

// const sum = calSum(2, 4);
// console.log(sum);

// const functionReturnObject = (name, age) => ({ name, age });

// console.log(functionReturnObject('Dũng', 18))

import { add as sum, PI } from './math.js';
import abc from './math.js';

console.log(abc);

console.log('Giá trị của PI là: ', PI);
console.log(sum(4, 8));
