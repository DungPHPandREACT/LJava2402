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

console.log(
	"document.getElementById('tagA').href: ",
	document.getElementById('tagA').href
);
console.log(
	"document.getElementById('tagA').getAttribute('data-id'): ",
	document.getElementById('tagA').getAttribute('data-id')
);

document.getElementById('tagA').href = 'https://google.com';
document.getElementById('tagA').setAttribute('data-id', 200);
document.getElementById('tagA').target = '_blank';

// Thay đổi css
document.getElementById('heading').style.color = 'pink';
document.getElementById('heading').style.fontSize = '46px';

// Xóa attribute
document.getElementById('tagA').removeAttribute('data-id');
