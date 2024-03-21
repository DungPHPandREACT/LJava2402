// 1. Khai báo 1 mảng gồm các số bất kỳ.
const numbers = [10, 4, -7, 9, 100, 3, -21, 33];
// -Tính tích của các phần tử trong mảng đó.
// let tich = 1;
// for (let number of numbers) {
// 	tich = tich * number;
// }
// console.log(tich);

// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// const arr2 = [];
// for (let number of numbers) {
// 	if (number % 2 === 0) {
// 		arr2.push(number);
// 	}
// }
// let min = arr2[0];
// for (let number of arr2) {
// 	if (number < min) {
// 		min = number;
// 	}
// }

// console.log(min);

// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// const arr3 = [];
// for (let number of numbers) {
// 	if (number % 3 === 0) {
// 		arr3.push(number);
// 	}
// }
// let max = arr3[0];
// for (let number of arr3) {
// 	if (number > max) {
// 		max = number;
// 	}
// }
// console.log(max);

// -Tính giá trị trung bình của mảng.

// -Lọc ra các số nguyên tố trong mảng.

// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let isExistNumber = false;
// for (let number of numbers) {
// 	if (number < 10) {
// 		isExistNumber = true;
// 		break;
// 	}
// }
// if (isExistNumber == false) {
// 	console.log('Không có số nào nhỏ hơn 10');
// } else {
// 	console.log('Có tồn tại phần tử nhỏ hơn 10');
// }

// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let isExistNumber = true;
// for (let number of numbers) {
// 	if (number < 20) {
// 		isExistNumber = false;
// 		break;
// 	}
// }
// if (isExistNumber) {
// 	console.log('Các phần tử trong mảng đều lớn hơn 20');
// } else {
// 	console.log('Trong mảng có phần tử nhỏ hơn 20');
// }

// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// Cách 1
// let n;
// do {
// 	n = Number(prompt('Nhập n'));
// } while (!numbers.includes(n));
// console.log('n: ', n);

// Cách 2
// let n;
// for (; true; ) {
// 	n = Number(prompt('Nhập n'));
// 	if (numbers.includes(n)) {
// 		break;
// 	}
// }
// console.log('n: ', n);

// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
