
let email = document.querySelector(".email-input");
let pass = document.querySelector(".pass-input");
document.querySelector(".btn-login").addEventListener("click", function () {
  console.log(email.value);
  let data = {
    email: email.value,
    password: pass.value,
  };
  console.log(data);
  login(data);
  console.log(dataAfterLogin)
  dataAfterLogin.password = null;
  sessionStorage.clear();
  localStorage.clear();
  sessionStorage.setItem("user", JSON.stringify(dataAfterLogin));
  if(JSON.parse(sessionStorage.getItem('user')).email!== undefined){
    alert("Login success!")
    window.location.replace("http://127.0.0.1:5500/index.html");
  }else{
    document.querySelector('.email-input').value="";
    document.querySelector('.pass-input').value="";
    document.querySelector('.email-input').focus();
    alert("Login not successfully!")
  }
  // console.log(JSON.parse(sessionStorage.getItem('user')));  
  
  // Put the object into storage
  // sessionStorage.setItem('roles', JSON.stringify(dataAfterLogin.roles));

// Retrieve the object from storage
// var retrievedObject = sessionStorage.getItem('roles');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
});

let dataAfterLogin;
function login(data){
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8080/api/v1/login", false);
xhr.setRequestHeader('content-type', 'application/json');
xhr.send(JSON.stringify(data));
dataAfterLogin = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
console.log(dataAfterLogin)

if(dataAfterLogin.error === "Not Found"){
  alert(dataAfterLogin.message)
}
}


// function render(items) {
//   let htmlDiv = document.getElementById("list-test");
//   let content = items.map(function (item) {
//     return `
//     <h2 class="header-prd"> ${item.id} </h2>
//     <div class="product">
//                 <div class="info">
//                   <p class="name"><a href="#">${item.email}</a></p>
//                   <p class="vote">
//                     <span><i class="fas fa-star"></i></span>
//                     <span><i class="fas fa-star"></i></span>
//                     <span><i class="fas fa-star"></i></span>
//                     <span><i class="fas fa-star"></i></span>
//                     <span><i class="fas fa-star"></i></span>
//                   </p>
//                   <p class="desc"> (Size lớn, trắng sữa)</p>
    
//                   <p class="price">
//                     <span>
//                       ${item.roles[0].name}
//                     </span> VNĐ
//                   </p>
//                 </div>
//               </div>
//     `;
//   });
//   htmlDiv.innerHTML = content.join("");
// }


// var xhr = new XMLHttpRequest();
// xhr.open("POST", "http://localhost:8080/api/v1/user/save", false);
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.send(SendInfo);



// let data1 = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
// console.log(data1)
// if(data.email == data1.email){
//   alert("Hello! I am an alert box!!");
// }
