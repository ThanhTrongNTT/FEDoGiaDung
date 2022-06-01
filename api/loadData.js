// save data in local storage or session storage
const user = JSON.parse(sessionStorage.getItem('user'))
console.log(user.email);

if( user != null){
    document.getElementById("profile").href = "user/user-profile.html";
    document.getElementById("profile").innerHTML = user.lastName;
    
}else{
}