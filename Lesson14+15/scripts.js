let listStudent = JSON.parse(localStorage.getItem('listStudent')) ?? [];

const $table = document.getElementById('table');
// Selector đến button "Create student"
const $buttonCreate = document.getElementById('create');
// Selector đến button "Update student"
const $buttonUpdate = document.getElementById('update');
// Selector đến input nhập id
const $id = document.getElementById('id');
// Selector đến input nhập name
const $name = document.getElementById('name');
// Selector đến input nhập gender
const $gender = document.getElementById('gender');
// Selector đến input nhập math score
const $math_score = document.getElementById('math_score');
// Selector đến input nhập english score
const $english_score = document.getElementById('english_score');
// Selector đến input nhập literature score
const $literature_score = document.getElementById('literature_score');
// Selector đến button search
const $buttonSearch = document.getElementById('search');
// Selector đến input nhập keyword
const $keywordSearch = document.getElementById('keyword_search');

// Chức năng read:
const renderStudents = (students = listStudent) => {
	let rowsStudent = '';
	for (let student of students) {
		rowsStudent += `
            <tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.math_score}</td>
                <td>${student.english_score}</td>
                <td>${student.literature_score}</td>
                <td>
                    <button class="btn btn-success" onclick="updateStudent(${student.id})">Update</button>
                    <button class="btn btn-danger" onClick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
        `;
	}

	$table.innerHTML = rowsStudent;
};

// Chức năng create
// Clear input
const clearInput = () => {
	$id.value = '';
	$name.value = '';
	$gender.value = '';
	$math_score.value = '';
	$english_score.value = '';
	$literature_score.value = '';
};
// Bước 1: Gán event on click cho button "Create student"
$buttonCreate.onclick = () => {
	console.log('Create student');
	// Các bước dưới xử lý trong event click
	// Bước 2: Lấy được dữ liệu trong các ô input người dùng vừa nhập
	const id = Number($id.value);
	const name = $name.value;
	const gender = $gender.value;
	const math_score = $math_score.value;
	const english_score = $english_score.value;
	const literature_score = $literature_score.value;
	// Bước 3: Tạo 1 object newStudent có giá trị là các giá trị vừa nhập ở input
	const newStudent = {
		id,
		name,
		gender,
		math_score,
		english_score,
		literature_score,
	};
	// Bước 4: Thêm object newStudent vào trong mảng
	listStudent.push(newStudent);
	// Bước 5: Gọi lại hàm renderStudents
	renderStudents();
	// Bước 6: Clear giá trị người dùng nhập ở input
	clearInput();
	// Bước 7: Cập nhật thông tin vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
};

// Chức năng delete
// Bước 1: gán event onclick vào button delete
const deleteStudent = (id) => {
	// Các bước dưới xử lý trong event click
	// Bước 2: lấy được id của học sinh muốn xóa
	// Bước 3: tìm index của học đó trong danh sách
	let index = -1;
	for (let i = 0; i < listStudent.length; i++) {
		if (listStudent[i].id === id) {
			index = i;
		}
	}
	// Bước 4: dùng hàm splice để xóa
	listStudent.splice(index, 1);
	// Bước 5: Gọi lại hàm renderStudents
	renderStudents();
	// Bước 6: Cập nhật thông tin vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
};

// Chức năng update
// *Hiển thị thông tin học sinh lên các ô input
// Bước 1: Gán được sự kiện onclick cho button update
const updateStudent = (idStudentUpdate) => {
	console.log('idStudentUpdate: ', idStudentUpdate);
	// Bước 2: Lấy được thông tin học sinh mà mình muốn update
	let index = -1;
	for (let i = 0; i < listStudent.length; i++) {
		if (listStudent[i].id === idStudentUpdate) {
			index = i;
		}
	}
	console.log('listStudent[index]: ', listStudent[index]);
	const { id, name, gender, math_score, english_score, literature_score } =
		listStudent[index];
	// Bước 3: Hiển thị thông tin của học sinh đó lên các ô input tương ứng
	$id.value = id;
	$name.value = name;
	$gender.value = gender;
	$math_score.value = math_score;
	$english_score.value = english_score;
	$literature_score.value = literature_score;
	// Bước 4: Disabled input nhập id
	$id.disabled = true;
	// Bước 5: Show button "Update student" và ẩn button "Create student"
	$buttonUpdate.style.display = 'inline';
	$buttonCreate.style.display = 'none';
};
// *Cập nhật lại thông tin học sinh
// Bước 1: gán event on click cho button "Update student"
$buttonUpdate.onclick = () => {
	// Bước 2: lấy toàn bộ thông tin học sinh vừa được chỉnh sửa
	const id = Number($id.value);
	const name = $name.value;
	const gender = $gender.value;
	const math_score = $math_score.value;
	const english_score = $english_score.value;
	const literature_score = $literature_score.value;

	const studentUpdate = {
		id,
		name,
		gender,
		math_score,
		english_score,
		literature_score,
	};
	// Bước 3: tìm vị trí index của học sinh đó
	let index = -1;
	for (let i = 0; i < listStudent.length; i++) {
		if (listStudent[i].id === id) {
			index = i;
		}
	}
	console.log('index: ', index);
	// Bước 4: cập nhật thông tin học sinh vào trong mảng
	listStudent[index] = studentUpdate;
	// Bước 5: gọi lại hàm renderStudents
	renderStudents();
	// Bước 6: Clear giá trị người dùng nhập ở input
	clearInput();
	// Bước 7: Enabled input nhập id
	$id.disabled = false;
	// Bước 8: Show button "Create student" và ẩn button "Update student"
	$buttonUpdate.style.display = 'none';
	$buttonCreate.style.display = 'inline';
	// Bước 9: Cập nhật thông tin vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
};

// Các bước làm phần search
// Bước 1: Gán event onclick cho button search
// $buttonSearch.onclick = () => {
// 	console.log('Searching...');
// 	// Bước 2: Lấy được từ khóa mà người dùng vừa nhập
// 	const keywordSearch = $keywordSearch.value;
// 	// Bước 3: Thực hiện lọc nội dung có chứa keyword
// 	const result = listStudent.filter((student) =>
// 		student.name.toLowerCase().includes(keywordSearch.toLowerCase())
// 	);
// 	console.log(result);
// 	// Bước 4: Gọi hàm renderStudents để in ra kết quả vừa được xử lý
// 	renderStudents(result);
// };

$keywordSearch.oninput = () => {
	console.log('Searching...');
	const keywordSearch = $keywordSearch.value;
	const result = listStudent.filter((student) =>
		student.name.toLowerCase().includes(keywordSearch.toLowerCase())
	);
	renderStudents(result);
};

renderStudents();
