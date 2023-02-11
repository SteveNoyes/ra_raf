var password = document.getElementById("inputPassword");
var username = document.getElementById("inputUsername");

document.getElementById("login_redirect").onclick = function () {
  if( !password.value || !username.value) {
    location.href = "./pages/prizes.html";
  }
};






function animateValue(item, duration, start = 0) {
  var end = item.innerText.replaceAll(",", "").trim();
  var range = end - start;
  var increment = (range / (duration / 10));
  
  if(end < start){
    increment *= -1;
  }
  var current = start;
  var stepTime = 1;
  
  var timer = setInterval(function() {
    current += Math.ceil(increment);
    item.innerText = current;
    if (current >= end) {
      item.innerText = end;
      clearInterval(timer);
    }
  }, stepTime);
}

document.querySelectorAll('.value').forEach((item)=>{
  animateValue(item, 3000);
});