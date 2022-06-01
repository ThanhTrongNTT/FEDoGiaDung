let products;
var xhr = new XMLHttpRequest();
function getAllProducts() {
  xhr.open("GET", "http://localhost:8080/api/v1/products", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  products = JSON.parse(xhr.responseText);
}
getAllProducts()

render(products)
function render(items) {
  let htmlDiv = document.getElementById("list-products");
  let content = items.map(function (item) {

    item.price = item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
      if(item.status == 1){
          item.status = 'Còn hàng';
      }else{
        item.status = 'Ngưng sản xuất';
      }
    return `
    <tr>
                        <td>
                          <i class="fab fa-angular fa-lg text-danger me-3"></i>
                          <strong>${item.name}</strong>
                        </td>
                        <td>${item.price}</td>                      
                        <td>
                          ${item.typeProduct.name}
                          
                        </td>
                        <td>${item.status}</td>
                        <td>
                          <div class="dropdown">
                            <button
                              type="button"
                              class="btn p-0 dropdown-toggle hide-arrow"
                              data-bs-toggle="dropdown"
                            >
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="bx bx-edit-alt me-1"></i> Edit</a
                              >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                                ><i class="bx bx-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
    `;
  });
  htmlDiv.innerHTML = content.join("");
}