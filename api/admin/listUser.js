let users;
var xhr = new XMLHttpRequest();
function getAllUsers() {
  xhr.open("GET", "http://localhost:8080/api/v1/users", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  users = JSON.parse(xhr.responseText);
}
getAllUsers();
render(users)
function render(items) {
  let htmlDiv = document.getElementById("list-users");
  let content = items.map(function (item) {
    return `
    <tr>
                        <td>
                          <i class="fab fa-angular fa-lg text-danger me-3"></i>
                          <strong>${item.firstName}</strong>
                        </td>
                        <td>${item.lastName}</td>                      
                        <td>
                          ${item.email}
                          
                        </td>
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
