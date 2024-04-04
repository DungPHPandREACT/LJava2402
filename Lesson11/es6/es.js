const course1 = 'HTML';
const course2 = 'CSS';
const course3 = 'Javascript';

// Các khóa trong Frontend là:
// + course1
// + course2
// + course3

// const result =
// 	'Các khóa trong Frontend là: \n + ' + course1 + '\n + ' + course2 + '\n + ' + course3;

// const result = `Các khóa trong Frontend là:
// + ${course1}
// + ${course2}
// + ${course3}`
// console.log(result);

const fruits = ['apple', 'orange', 'banana'];
// // first = 'apple';
// let first = fruits[0];
// // second = 'orange';
// let second = fruits[1];
// // last = 'banana';
// let last = fruits[2];

// ES6 destructuring
// let [first, ,last = 'chưa có giá trị'] = fruits;

// console.log(first, last);

// const arr1 = [3, 5];

// const [a, b] = arr1;
// const arr2 = [b, a];
// const arr2 = [5,3]

// destructuring trong object
const obj = {
	d: 31,
	m: 3,
	y: 2024,
};

// Tạo biến day, và giá trị của biến day là trùng với giá trị của key d
// const { d: day, m: month, y, time_zone = '+7' } = obj;
// console.log(day); //31
// console.log(month); //3
// console.log(y); // 2024
// console.log(time_zone);

const name = 'T3H';
const age = 18;
const person = {
	name,
	age,
	greeting() {
		console.log('Hello');
	},
};
person.greeting();
