// Lưu thông tin và cập nhật thông tin
// const student = {
// 	name: 'Dũng',
// 	age: 18,
// };

// JSON
// JSON.stringify(value) => convert sang định dạng json
// JSON.parse(value) => convert từ định dạng json về kiểu dữ liệu ban đầu

// Lưu thông tin
// localStorage.setItem('student', JSON.stringify(student));

// Lấy thông tin
// const PI = localStorage.getItem('PI');
// console.log(PI);

// let student = localStorage.student;
// console.log(student);
// student = JSON.parse(student);
// console.log(student);

// Xóa item chỉ định
// localStorage.removeItem('course');
// Xóa toàn bộ các item
// localStorage.clear();

// const number = 20;
// localStorage.setItem('number', number);

//
// sessionStorage.setItem('number', 10);
// sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
// console.log(sessionStorage.length);

// Cookie
// document.cookie = 'username=T3H';
// document.cookie = 'password=56789123';

// const getValueCookie = (name) => {
// 	let resultValue;
// 	let valuesCookie = document.cookie;
// 	console.log(valuesCookie.split(';'));
// 	for (let value of valuesCookie.split(';')) {
// 		const [nameCookie, valueCookie] = value.trim().split('=');
// 		if (nameCookie == name) {
// 			resultValue = valueCookie;
// 		}
// 	}
// 	return resultValue;
// };

// console.log(document.cookie);

const PI = 3.14;
let number = 10;
try {
	PI = 4;
} catch (error) {
	console.log(error);
}
console.log(number);
