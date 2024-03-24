// Kiểm tra xem trong các số sau, những số nào là số nguyên tố
// 2
// function checkSoNguyenTo(number) {
// 	let count = 0;
// 	for (let i = 0; i <= number; i++) {
// 		if (number % i === 0) {
// 			count++;
// 		}
// 	}
// 	if (count === 2) {
// 		console.log(number, ' là số nguyên tố');
// 	} else {
// 		console.log(number, ' không phải là số nguyên tố');
// 	}
// }
// checkSoNguyenTo(2);
// // 3
// checkSoNguyenTo(3);
// // 4
// checkSoNguyenTo(4);
// // 5
// checkSoNguyenTo(5);
// // 6
// checkSoNguyenTo(6);
// // 7
// checkSoNguyenTo(7);
// // 8
// checkSoNguyenTo(8);
// // 9
// checkSoNguyenTo(9);

// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
// thực hiện in ra màn hình “Hello world, ” + name.
// function logger(name) {
// 	console.log('Hello world ' + name);
// }
// logger('Dũng');

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2 .
// function calNumber(a, b) {
// 	return (a + b) ** 2;
// }
// console.log(calNumber(1, 2));

// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.
function inputNumber() {
	let a;
	do {
		a = prompt('Nhập a');
	} while (a <= 0);
	return a;
}
console.log(inputNumber());
