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
let n = prompt('Nhập n: ');

let gt = 1;
for (let i = 1; i <= n; i++) {
	gt = gt * i;
}
console.log(gt);
