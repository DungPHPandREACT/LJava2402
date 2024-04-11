const listStudent = [
	{
		id: 1,
		name: 'Nguyễn Việt Hà',
		gender: 'nam',
		math_score: 10,
		english_score: 9,
		literature_score: 9,
	},
	{
		id: 2,
		name: 'Trần Thị B',
		gender: 'nữ',
		math_score: 8,
		english_score: 8,
		literature_score: 8,
	},
];

const $table = document.getElementById('table');
// Selector đến button "Create student"
const $buttonCreate = document.getElementById('create');
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

// Chức năng read:

const renderStudents = () => {
	let rowsStudent = '';
	for (let student of listStudent) {
		rowsStudent += `
            <tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.math_score}</td>
                <td>${student.english_score}</td>
                <td>${student.literature_score}</td>
                <td>
                    <button class="btn btn-success">Success</button>
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
	const id = $id.value;
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
};

renderStudents();
