// let email = document.querySelector(".email-input");
// let user;
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => user = data[0]);

// document.querySelector(".btn-login").addEventListener("click", function () {
//   console.log(email.value);
//   if(email.value == user.email)
//   console.log("success!!")
// });


function render(items) {
  let htmlDiv = document.getElementById("list-test");
  let content = items.map(function (item) {
    return `
    <h2 class="header-prd"> ${item.name} </h2>
    <div class="product">
    <div class="img">
    <img src="images/AnhCat/sp-1.png" alt="Giường Châu Âu" class="img-fluid">
  </div>
                <div class="info">
                  <p class="name"><a href="#">${item.email}</a></p>
                  <p class="vote">
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                    <span><i class="fas fa-star"></i></span>
                  </p>
                  <p class="desc"> (Size lớn, trắng sữa)</p>
    
                  <p class="price">
                    <span>
                      ${item.phone}
                    </span> VNĐ
                  </p>
                </div>
              </div>
    `;
  });
  htmlDiv.innerHTML = content.join("");
}

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    let items = response.data;
    render(items);
  });

const aasd = `
<h2 class="header-prd"> ${item.name} </h2>
<div class="product">
						
						<div class="info">
							<p class="name"><a href="#">${item.email}</a></p>
							<p class="vote">
								<span><i class="fas fa-star"></i></span>
								<span><i class="fas fa-star"></i></span>
								<span><i class="fas fa-star"></i></span>
								<span><i class="fas fa-star"></i></span>
								<span><i class="fas fa-star"></i></span>
							</p>
							<p class="desc"> (Size lớn, trắng sữa)</p>

							<p class="price">
								<span>
									${item.phone}
								</span> VNĐ
							</p>
						</div>
					</div>
`;
