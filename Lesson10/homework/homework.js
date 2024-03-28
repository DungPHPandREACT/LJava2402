import { users } from './data.js';

// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// const n = Number(prompt('Nhập n'));
// function findUser(id) {
// 	for (let user of users) {
// 		if (user.id === id) {
// 			return user;
// 		}
// 	}

// 	return false;
// }

// const result = findUser(n);
// if (result === false) {
// 	console.log('Không tìm thấy user có id =', n);
// } else {
// 	console.log('Kết quả tìm kiếm: ', result);
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// const keywordInput = prompt('Nhập keyword: ');
// function getEmails(keyword) {
// 	const result = [];
// 	for (let user of users) {
// 		const fullName = user.first_name + ' ' + user.last_name;
// 		if (fullName.toLowerCase().includes(keyword.toLowerCase())) {
// 			result.push(user.email);
// 		}
// 	}

// 	return result;
// }
// const listEmail = getEmails(keywordInput);
// if (listEmail.length === 0) {
// 	console.log('Không tìm user có tên chứa keyword');
// } else {
// 	for (let email of listEmail) {
// 		console.log('Email: ', email);
// 	}
// }

// -Đếm số lượng user có age > 50.
// let count = 0;
// for(let user of users){
//     if(user.age > 50){
//         count++;
//     }
// }

// console.log('Có ' + count + ' user có tuổi > 50')

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let count = 0;
// for (let user of users) {
// 	if (user.is_married) {
// 		count++;
// 	}
// }

// console.log('Có ' + count + ' user đã kết hôn');
// console.log('Có ' + (users.length - count) + ' user chưa kết hôn');

// -Đếm số lượng user theo từng ngành nghề tương ứng.
const result5 = {};
for (let user of users) {
	if (result5.hasOwnProperty(user.job)) {
		result5[user.job] = result5[user.job] + 1;
	} else {
		result5[user.job] = 1;
	}

	// result5[user.job] = result5.hasOwnProperty(user.job)
	// 	? result5[user.job] + 1
	// 	: 1;
}

console.log('result5: ', result5);
