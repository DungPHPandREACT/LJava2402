// Bài 1: In ra dãy số từ 1 đến 500.
// for (let number = 1; number <= 500; number++) {
// 	console.log(number);
// }

// Bài 2: In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let number = 1; number <= 300; number++) {
// 	if (number % 2 === 0 && number % 3 === 0) {
// 		console.log(number);
// 	}
// }

// Bài 3: Tính tổng các số chẵn trong đoạn [-30, 50].
// undefined
// number = -30;
// sum = undefined; + -30 = NaN (not a number)

let sum = 0;
// for (let number = -30; number <= 50; number++) {
// 	if (number % 2 === 0) {
// 		sum = sum + number;
// 	}
// }

// console.log(sum);

// Bài 4: Nhập vào số n. Tính giai thừa của số n.
// let n = prompt('Nhập n: ');

// let gt = 1;
// for (let i = 1; i <= n; i++) {
// 	gt = gt * i;
// }
// console.log(gt);

// vòng lặp while
// let i = 1;
// while (i <= 5) {
// 	console.log(i);
// 	i++;
// }

// for (let i = 1; i <= 5; i++) {
// 	if (i == 3) {
// 		continue;
// 	}
// 	console.log(i);
// }

// Bài 8: Nhập vào số n.
// Viết chương trình kiểm tra xem n có phải số nguyên tố không.

// const n = prompt('Nhập n:');
// if (n >= 2) {
// 	let count = 0;
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log('Đây là số nguyên tố');
// 	} else {
// 		console.log('Đây không phải là số nguyên tố');
// 	}
// } else {
// 	console.log('Đây không phải số nguyên tố');
// }

// Bài 5: Nhập vào 3 số a, b, x (a < b).
// Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
let a, b, x;
do {
	a = prompt('Nhập a: ');
	b = prompt('Nhập b: ');
	x = prompt('Nhập x: ');
} while (a >= b);
// for (; true; ) {
// 	a = prompt('Nhập a: ');
// 	b = prompt('Nhập b: ');
// 	x = prompt('Nhập x: ');
// 	if (a < b) {
// 		break;
// 	}
// }

for (let i = a; i <= b; i++) {
	if (i % x === 0) {
		console.log(i);
		break;
	}
}
