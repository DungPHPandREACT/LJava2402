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
const arr3 = [];
for (let number of numbers) {
	if (number % 3 === 0) {
		arr3.push(number);
	}
}
let max = arr3[0];
for (let number of arr3) {
	if (number > max) {
		max = number;
	}
}
console.log(max);

// -Tính giá trị trung bình của mảng.
// -Lọc ra các số nguyên tố trong mảng.
// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
