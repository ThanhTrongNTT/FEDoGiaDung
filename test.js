// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:8080/api/v1/products", false);
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.send();
// let data1 = JSON.parse(xhr.responseText); //data is now a javascript object full of the API data
// console.log(data1)

// save data in local storage or session storage

// window.onload = function(){
//     document.getElementById("login-page").innerHTML = "Item was changed";
//     localStorage.removeItem('IdUser');
//    }

if(localStorage.getItem('emailUser') != null){
    document.getElementById("login-page").value = localStorage.getItem('emailUser');
    
}else{
}

localStorage.removeItem('IdUser');