// Bài 1: Viết 1 function để tính toán tổng các phần tử trong dãy số sau:
// -input1: 1,2,3,4 => output1: 10
// -input2: 1,2,3,4,5 => output2: 15
// -input3: 1,2,3,4,5,6 => output3: 21
// -input4: 1,2,3,4,5,6,7 => output4: 28
// -input5: 2,-3,5,7,-10 => output5
// -input6: -10, 8 => output6
const sum = (...numbers) => {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	console.log(result);
};
sum(1, 2, 3, 4, 5, 6);

// Bài 2: Cho mảng ban đầu là arr = [1,54,6,7]
// hãy tạo ra một mảng newArr có newArr[i] = arr[i] + 5.
// arr = [1,54,6,7]
// newArr = [6, 59, 11, 12]

const arr = [1, 54, 6, 7];
// Cách 1:
// const newArr = [];
// for (let number of arr) {
// 	const newElement = number + 5;
// 	newArr.push(newElement);
// }
// console.log(newArr);

// Cách 2: sử dụng hàm map
// const newArr = arr.map((value) => {
// 	return value + 5;
// });
// console.log(arr);
// console.log(newArr);

// Bài 3: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên.
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

// Output: newArr = [1, 6]
const newArr = arr1.filter((value, index, arr) => {
	console.log('value: ', value);
	console.log('arr2.includes(value): ', arr2.includes(value));

	return arr2.includes(value);
});
console.log('newArr: ', newArr);
