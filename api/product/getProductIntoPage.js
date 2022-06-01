var xhr = new XMLHttpRequest();
let types;
let products;

function getTypes() {
  xhr.open("GET", "http://localhost:8080/api/v1/types", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  types = JSON.parse(xhr.responseText);
}
function getProducts() {
  xhr.open("GET", "http://localhost:8080/api/v1/products", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  products = JSON.parse(xhr.responseText);
}

getProducts();
getTypes();
console.log(types);
renderType(types);
renderProduct(products);
function renderProduct(items) {
  types.forEach((element) => {
    let id = "list-products-"+element.id;
    console.log(id);
    let htmlDiv = document.getElementById(id);
    console.log(htmlDiv)
    let content = items.map(function (item) {
      item.price = item.price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
      if(item.typeProduct.name === element.name)
      return ` 
      <div class="col-lg-3 col-sm-6">
							<div class="product">
								<div class="img">
									<img src="${item.pic}g" alt="${item.name}"
										class="img-fluid">
								</div>
								<div class="info">
									<p class="name"> <a href="/user/detail.html"> ${item.name}</a> </p>
									<p class="vote">
										<span><i class="fas fa-star"></i></span>
										<span><i class="fas fa-star"></i></span>
										<span><i class="fas fa-star"></i></span>
										<span><i class="fas fa-star"></i></span>
										<span><i class="fas fa-star"></i></span>
									</p>
									<p class="desc">${item.description} </p>

									<p class="price"> <span>${item.price}</span> VNĐ </p>
								</div>
							</div>
						</div>
      `;
    });
    if(content != null){
        htmlDiv.innerHTML = content.join("");
    }
    
  });
}
function renderType(items) {
  let htmlDiv = document.getElementById("list-types");
  let content = items.map(function (item) {
    return `
      <div class="list-product">
				<div class="d-flex justify-content-between box-title">
					<h2 class="header-prod"> ${item.name} </h2>
				</div>
				<div class="box-product" >
					<div class="row" id="list-products-${item.id}">
					</div>
				</div>
			</div>  
      `;
  });
  htmlDiv.innerHTML = content.join("");
}
