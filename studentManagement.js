let arrStudents = [
    { "studentId": "SV001", "fullName": "Nguyễn Văn A", "email": "abc@gmail.com", "phone": "0355914029", "address": "Hà Nội", "sex": true },
    { "studentId": "SV002", "fullName": "Nguyễn Văn B", "email": "abc@gmail.com", "phone": "0355843029", "address": "HCM", "sex": false },
    { "studentId": "SV003", "fullName": "Nguyễn Văn C", "email": "abc@gmail.com", "phone": "0357946029", "address": "QN", "sex": true }
];
let action = "Create";
function readData() {
    let listStudents = document.getElementById("listStudents");
    listStudents.innerHTML = "";
    for (let index = 0; index < arrStudents.length; index++) {
        listStudents.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${arrStudents[index].studentId}</td>
                    <td>${arrStudents[index].fullName}</td>
                    <td>${arrStudents[index].email}</td>
                    <th>${arrStudents[index].phone}</th>
                    <th>${arrStudents[index].address}</th>
                    <th>${arrStudents[index].sex ? "Nam" : "Nữ"}</th>
                    <th>
                        <a href="javascript:initUpdate('${arrStudents[index].studentId}')">Cập nhật</a>
                        <a href="javascript:deleteStudent('${arrStudents[index].studentId}')">Xóa</a>
                    </th>
                </tr>
        `
    }
}
function createNewStudent() {
    let studentId = document.getElementById("studentId").value;
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let sex = (document.querySelector("input[type='radio']:checked").value == "true") ? true : false;
    let newStudent = { studentId, fullName, email, phone, address, sex };
    arrStudents.push(newStudent);
    readData();
    document.getElementById("studentId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("male").checked = true;
}
let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
     if (action == "Create") {
        createNewStudent();
    } else {
        updateStudent();
    }
})
let craft= document.getElementById("create");
craft.addEventListener("click", function () {
     if (action == "Create") {
        createNewStudent();
     }
    })
function initUpdate(studentId) {
    let indexUpdate = getIndexStudentById(studentId);
    if (indexUpdate >= 0) {
        document.getElementById("studentId").value = arrStudents[indexUpdate].studentId;
        document.getElementById("fullName").value = arrStudents[indexUpdate].fullName;
        document.getElementById("email").value = arrStudents[indexUpdate].email;
        document.getElementById("phone").value = arrStudents[indexUpdate].phone;
        document.getElementById("address").value = arrStudents[indexUpdate].address;
        if (arrStudents[indexUpdate].sex) {
            document.getElementById("male").checked = true;
        } else {
            document.getElementById("female").checked = true;
        }
    }
    document.getElementById("studentId").readOnly = false;
    action = "Update";
}
function updateStudent() {
    let studentId = document.getElementById("studentId").value;
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let sex = (document.querySelector("input[type='radio']:checked").value == "true") ? true : false;
    let studentUpdate = { studentId, fullName, email, phone, address, sex };
    let indexUpdate = getIndexStudentById(studentId);
    arrStudents[indexUpdate] = studentUpdate;
    readData();
    document.getElementById("studentId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("male").checked = true;
    document.getElementById("studentId").readonly = false;
    action = "Create";
    
}

function deleteStudent(studentId) {
    let indexDelete = getIndexStudentById(studentId);

    arrStudents.splice(indexDelete, 1);
    readData();
}

function getIndexStudentById(studentId) {
    for (let index = 0; index < arrStudents.length; index++) {
        if (arrStudents[index].studentId == studentId) {
            return index;
        }
    }
    return -1;
}
// Hàm kiểm tra định dạng email
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Hàm kiểm tra số điện thoại Việt Nam
//   function isValidPhone(phone) {
//     const phoneRegex = /^(0[1-9])+([0-9]{8})$/;
//     return phoneRegex.test(phone);
//   }
  
//   // Hàm kiểm tra quê quán không được để trống
//   function isValidHometown(address) {
//     return address.trim() !== "";
//   }
  
//   // Hàm kiểm tra và xử lý giới tính mặc định là "Nam"
//   function processGender(sex) {
//     if (sex !== "Nam" && sex !== "Nữ") {
//       return "Nam"; // Nếu không hợp lệ, mặc định là "Nam"
//     }
//     return sex;
//   }
  
  
//   if (!isValidEmail(arrStudents.email)) {
//     console.log("Email không hợp lệ.");
//   }
  
//   if (!isValidPhone(arrStudents.phone)) {
//     console.log("Số điện thoại không hợp lệ.");
//   }
  
//   if (!isValidHometown(arrStudents.address)) {
//     console.log("Quê quán không được để trống.");
//   }
  
//   arrStudents.sex = processGender(arrStudents.sex);
//   console.log("Giới tính đã xử lý:", arrStudents.sex);
  


window.onload = readData();