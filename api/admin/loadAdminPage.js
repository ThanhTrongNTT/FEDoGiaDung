
// sessionStorage.setItem('role', 'ROLE_CUSTOMER');
const user  = JSON.parse(sessionStorage.getItem('user'));
function test() {
    let count =0;
    if(user === null){
        alert('Please Login to access this page.')
        location.replace('/user/login.html');
        
    }else{
        user.roles.forEach(element => {
            if(element.name === 'ROLE_ADMIN')
            count++;
        });
        if(count==0){
            alert("You don't have permission to access this page.")
            location.replace('/index.html');
        }
    }
};
window.onload = test();

$("#btnLogout").click(function (e) {
    sessionStorage.clear();
    alert("You will be Logout");
  location.replace("http://127.0.0.1:5500/index.html");
  });