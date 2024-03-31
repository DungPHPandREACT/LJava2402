// Bài tập 1

// const $url = document.querySelector('#url');
// const $width = document.querySelector('#width');
// const $height = document.getElementById('height');
// const $radius = document.querySelector('#radius');
// const $alt = document.querySelector('#alt');

// const $image = document.querySelector('img');
// // Change url
// $url.onchange = function () {
// 	const newValueURL = $url.value;
// 	$image.src = newValueURL;
// };
// // Change width
// $width.oninput = function () {
// 	const newValueWidth = $width.value;
// 	$image.style.width = newValueWidth + 'px';
// };
// // Change height
// $height.oninput = function () {
// 	const newValueHeight = $height.value;
// 	$image.style.height = newValueHeight + 'px';
// };
// // Change radius
// $radius.oninput = function () {
// 	const newValueRadius = $radius.value;
// 	$image.style.borderRadius = newValueRadius + 'px';
// }
// // Change alt
// $alt.oninput = function () {
// 	const newValueAlt = $alt.value;
// 	// $image.setAttribute('alt', newValueAlt);
//     $image.alt = newValueAlt;
// };

// Bài tập 3
const listButton = document.querySelectorAll('td button');
console.log(listButton);

for (let button of listButton) {
	button.onclick = function () {
		button.parentElement.parentElement.remove();
	};
}
