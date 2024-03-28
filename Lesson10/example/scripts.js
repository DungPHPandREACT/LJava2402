// Selector theo ID
// const findElementWithId = document.getElementById('heading');
// console.log(findElementWithId);

// // Selector theo tag name
// const findElementsWithTagName = document.getElementsByTagName('h1');
// console.log(findElementsWithTagName);

// // Selector theo class name
// const findElementsWithClassName = document.getElementsByClassName('heading');
// console.log(findElementsWithClassName);

// Tìm thẻ h1 có class là heading
// const result1 = document.querySelector('h1.heading');
// console.log(result1);
// const result2 = document.querySelectorAll('h1');
// console.log(result2);

// document.getElementById('heading').innerHTML =
// 	'<a href="https://google.com">Nội dung đã được thay đổi từ Javascript</a>';

// document.getElementById('heading').innerText =
// 	'<a href="https://google.com">Nội dung đã được thay đổi từ Javascript</a>';

// console.log(
// 	"document.getElementById('tagA').href: ",
// 	document.getElementById('tagA').href
// );
// console.log(
// 	"document.getElementById('tagA').getAttribute('data-id'): ",
// 	document.getElementById('tagA').getAttribute('data-id')
// );

// document.getElementById('tagA').href = 'https://google.com';
// document.getElementById('tagA').setAttribute('data-id', 200);
// document.getElementById('tagA').target = '_blank';

// // Thay đổi css
// document.getElementById('heading').style.color = 'pink';
// document.getElementById('heading').style.fontSize = '46px';

// // Xóa attribute
// document.getElementById('tagA').removeAttribute('data-id');

// // Tạo thẻ h2
// let tagH2 = document.createElement('h2');
// // Gán nội dung
// tagH2.innerText = 'Hello world';
// // Tạo attribute id
// tagH2.id = 'heading-h2';

// // Selector đến thẻ body và thêm vào cuối thẻ body
// document.body.appendChild(tagH2);

// // Xóa phần tử có id là heading
// document.getElementById('heading').remove();

// 1. Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list và các li.favorite-list-item.
// Sử dụng DOM để thay đổi nội dung của tất cả li.favorite-list-item thành “I love this thing”.
const tagsLi = document.querySelectorAll('li.favorite-list-item');
for (let tagLi of tagsLi) {
	tagLi.innerHTML = 'I love this thing';
}

// Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ.
for (let tagLi of tagsLi) {
	tagLi.style.color = 'red';
}

// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.
const content = 'Thẻ li mới';

// Tạo thẻ li mới
const newTagLi = document.createElement('li');
// Gán nội dung cho thẻ li
newTagLi.innerText = content;
// Selector đến thẻ ul và thêm thẻ li vừa tạo vào cuối
document.querySelector('ul#favorite-list').append(newTagLi);
