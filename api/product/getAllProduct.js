var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8080/api/v1/products", false);
xhr.setRequestHeader("content-type", "application/json");
xhr.send();
let data1 = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
console.log(data1);
render(data1)

// function render(items) {
//   let htmlDiv = document.getElementById("list-product");
//   let content = items.map(function (item) {
//     return `
//     <div class="product">
//         <div class="img">
//             <img
//                 src="${item.pic}"
//                 alt="${item.name}"
//                 class="img-fluid"
//             />
//         </div>
//     <div class="info">
//       <p class="name"><a href="#">${item.name}</a></p>
//       <p class="vote">
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//         <span><i class="fas fa-star"></i></span>
//       </p>
//       <p class="desc">${item.description}</p>

//       <p class="price"><span> ${item.price} </span> VNĐ</p>
//     </div>
//   </div>    
//     `;
//   });
//   htmlDiv.innerHTML = content;
// }
