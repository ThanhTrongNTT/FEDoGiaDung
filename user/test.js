let email = document.querySelector(".email-input");
let user;
fetch("http://localhost:8080/api/v1/users")
  .then((response) => response.json())
  .then((data) => user = data[0]);

// var users;
//   $(function () {
//     $.ajax({
//       type: "GET",
//       url: "http://localhost:8080/api/v1/users",
//       success: function (data) {
//         users=data;
//       }
//     });
//   });

document.querySelector(".btn-login").addEventListener("click", function () {
  console.log(email.value);
  if(email.value == user.email)
  console.log("success!!")
});


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

// axios
//   .get("http://localhost:8080/api/v1/users")
//   .then(function (response) {
//     let items = response.data;
//     render(items);
//   });

