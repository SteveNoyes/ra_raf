var password = document.getElementById("inputPassword");
var username = document.getElementById("inputUsername");


document.getElementById("login_redirect").onclick = function () {
  if( !password.value || !username.value) {
    location.href = "./pages/prizes.html";
  }
  
};