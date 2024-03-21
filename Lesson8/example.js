// const listNumber1 = []; // mảng rỗng
// console.log(listNumber1);

// const listNumber2 = [1, '2', true, null];
// console.log(listNumber2);
// listNumber2[2] = false;
// listNumber2[1] = 2;
// console.log(listNumber2);
// console.log(listNumber2.length);
// console.log([].length);

// const listNumber3 = new Array();
// console.log(listNumber3);

// const listNumber4 = new Array(1, 3, 4);
// console.log(listNumber4);

// const chars = ['a', 'b', 'c', 'd', 'e', 'f'];

// for (let i = 0; i < chars.length; i++) {
// 	console.log('value: ', chars[i]);
// 	console.log('index: ', i);
// 	console.log('-------');
// }

// for (let e of chars) {
// 	console.log('element: ', e);
// }
// console.log(chars);
// chars.push('string1');
// chars.unshift('string1');
// chars.pop();
// chars.shift();
// console.log(chars);
// chars.push(1, 2, 3);
// chars.unshift(1, 2, 3, 4);
// chars.pop();
// chars.shift();
// console.log(chars);

// splice
// console.log(chars);
// xóa 1 phần tử ở vị trí index = 2
// chars.splice(2, 1);

// [ 'a', 'b','string1' 'c', 'd', 'e', 'f' ]
// thêm phần tử string1 vào vị trí index = 2
// chars.splice(2, 0, 'string1');
// console.log(chars);

// const chars = ['a', 'b', 'c', 'd', 'e', 'f'];
// const element = 123;

// console.log(chars.includes(element));
// console.log('Hello world, hihi'.includes('abcxyz'));

// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
// let min = numbers[0];
// let max = numbers[0];
// for (let number of numbers) {
// 	if (number < min) {
// 		min = number;
// 	}
// 	if (number > max) {
// 		max = number;
// 	}
// }
// console.log('min: ', min);
// console.log('max: ', max);

// Tính tổng các phần tử trong mảng.
// let sum = 0;
// for (let number of numbers) {
// 	sum = sum + number;
// }
// console.log('sum: ', sum);

// Tính trung bình cộng các phần tử trong mảng.
// const avg = sum / numbers.length;

// Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
// for (let number of numbers) {
// 	if (number % 3 === 0) {
// 		console.log('Phần tử đầu tiên chia hết cho 3 là: ', number);
// 		break;
// 	}
// }

// Tìm các phần tử là số nguyên tố trong mảng.
for (let number of numbers) {
	console.log(number);
	// Kiểm tra xem có số nguyên tố không
	let count = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			count = count + 1;
		}
	}
	if (count === 2) {
		console.log(number, ' là số nguyên tố');
	}
}
