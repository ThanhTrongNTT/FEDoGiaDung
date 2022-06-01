$("#btnLogout").click(function (e) {
  sessionStorage.clear();
  alert("You will be Logout");
location.replace("http://127.0.0.1:5500/index.html");
});
