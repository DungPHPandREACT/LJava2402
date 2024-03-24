// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
let d1 = prompt('Nhập dãy số d1: ');
let d2 = prompt('Nhập dãy số d2: ');

const arrD1 = d1.split(',');
const arrD2 = d2.split(',');

// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let result1 = true;
for (let element of arrD1) {
	if (!arrD2.includes(element)) {
		result = false;
		break;
	}
}
if (result1) {
	console.log('Tất cả các phần tử trong d1 đều nằm trong d2');
} else {
	console.log('Trong d1 có phần tử không nằm trong d2');
}

// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let sumD1 = 0;
for (let element of arrD1) {
	sumD1 = sumD1 + Number(element);
}

let result2 = false;
for (let element of arrD2) {
	if (element % sumD1 === 0) {
		result2 = true;
		break;
	}
}
if (result2) {
	console.log('Trong d2 có phần tử chia hết cho tổng của d1');
} else {
	console.log('Trong d2 không có phần tử nào chia hết cho tổng của d1');
}

// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// Cách 1
const mergeD2andD1 = arrD2.concat(arrD1);
const newArr = [];
for (let number of mergeD2andD1) {
	if (number % 2 === 0) {
		newArr.push(Number(number));
	}
}
console.log('newArr: ', newArr);

// Cách 2
// const newArr = [...arrD2, ...arrD1].filter((number) => number % 2 === 0);
// console.log(newArr);
