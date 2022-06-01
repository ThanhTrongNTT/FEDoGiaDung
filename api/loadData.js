// save data in local storage or session storage
const user = JSON.parse(sessionStorage.getItem('user'))

if( user != null){
    document.getElementById("profile").href = "user/user-profile.html";
    document.getElementById("profile").innerHTML = user.lastName;
    
}else{
}