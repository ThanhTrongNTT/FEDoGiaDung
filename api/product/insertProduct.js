{
  /* <script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-storage.js"></script> */
}

// var data = {};

// var formData = $("#formProduct").serializeArray();

// $.each(formData, function (i, v) {
//   data["" + v.name + ""] = v.value;
// });
// console.log(data);
var data = {};
$("#btnAddOrUpdate").click(function (e) {
  e.preventDefault();

  var formData = $("#formProduct").serializeArray();

  $.each(formData, function (i, v) {
    data["" + v.name + ""] = v.value;
  });
  if (data.status === "1") {
    data.status = true;
  } else data.status = false;

  dataTypes.forEach((element) => {
    if (document.getElementById("typeProduct").value === element.name) {
      data["typeProduct"] = element;
    }
    xhr.open("POST", "http://localhost:8080/api/v1/product/save", false);
    xhr.setRequestHeader("content-type", "application/json");
    const ref = firebase.storage().ref();
    const file = document.querySelector("#image").files[0];
    const metadata = {
      contentType: file.type,
    };
    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
    uploadIMG
      .then((snapshort) => snapshort.ref.getDownloadURL())
      .then((url) => {
        // console.log(url);
        data["pic"] = url;
        console.log("data:");
        console.log(JSON.stringify(data));
        // console.log(data);
        xhr.send(JSON.stringify(data));
      })
      .catch(console.error);
  });
});

let dataTypes;
let products;
var xhr = new XMLHttpRequest();
function loadType() {
  xhr.open("GET", "http://localhost:8080/api/v1/types", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  dataTypes = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
  console.log(dataTypes);
}
function loadProduct() {
  xhr.open("GET", "http://localhost:8080/api/v1/products", false);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send();
  products = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
  console.log(products);
}
function render(items) {
  let htmlDiv = document.getElementById("typeProduct");
  let content = items.map(function (item) {
    return `
    <option value="${item.name}">${item.name}</option>
    `;
  });
  htmlDiv.innerHTML = content;
}
loadProduct();
loadType();
render(dataTypes);

const firebaseConfig = {
  apiKey: "AIzaSyCU2vmtD0wMJPKo13PGx5L49vU_rAjSR9A",
  authDomain: "websneaker-2b62e.firebaseapp.com",
  projectId: "websneaker-2b62e",
  storageBucket: "websneaker-2b62e.appspot.com",
  messagingSenderId: "281295105750",
  appId: "1:281295105750:web:9aac7d81dd3885d8f56377",
  measurementId: "G-DLRMLERXMZ",
};
firebase.initializeApp(firebaseConfig);
