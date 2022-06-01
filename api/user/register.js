var data = {};
let users;
let firstName = document.querySelector("#user-name").value;
let lastName = document.querySelector("#user-address").value;
let email = document.querySelector("#user-email").value;
let password = document.querySelector("#user-password").value;
let confirmPassword = document.querySelector("#user-confirmPassword").value;
var xhr = new XMLHttpRequest();
$("#btnRegister").click(function (e) {
  e.preventDefault();
  firstName = document.querySelector("#user-name").value;
  lastName = document.querySelector("#user-address").value;
  email = document.querySelector("#user-email").value;
  password = document.querySelector("#user-password").value;
  confirmPassword = document.querySelector("#user-confirmPassword").value;
  checkNoData();

  var formData = $("#formUser").serializeArray();

  $.each(formData, function (i, v) {
    data["" + v.name + ""] = v.value;
  });
  data["enable"] = true;

  console.log(data);
  // console.log(users);
  let count = 0;
  users.forEach((element) => {
    if (data.email === element.email) {
      count++;
      xhr.open("POST", "http://localhost:8080/api/v1/user/save", false);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(JSON.stringify(data));
      let test = JSON.parse(xhr.responseText);
      alert(test.message);
      firstName = document.querySelector("#user-email").focus();
    }
  });

  if (count == 0) {
    xhr.open("POST", "http://localhost:8080/api/v1/user/save", false);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(JSON.stringify(data));
    let test = JSON.parse(xhr.responseText);
    console.log(test);
    alert("Register Success, You can Login here.");
    location.replace("login.html");
  }
  // alert('Register Success, You can Login here.');
  // location.replace('/user/login.html')
});

function checkNoData() {
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("please fill all textBox");
  } else if (password != confirmPassword) {
    alert("password not confirm!");
    confirmPassword = "";
    document.querySelector("#user-confirmPassword").focus();
  }
}
getAllUser();
console.log(users);
function getAllUser() {
  xhr.open("GET", "http://localhost:8080/api/v1/users", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  users = JSON.parse(xhr.responseText);
}
