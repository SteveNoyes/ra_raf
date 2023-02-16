function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fn(textboxno) {
  var x = getRandomInt(2, 43);
  if(textboxno==1)
  {
    document.getElementById("winnertext1").innerHTML = x;
    document.getElementById("img1").src="imgs/cup.png";
  }
  else if(textboxno==2)
  {
    document.getElementById("winnertext2").innerHTML = x;
    document.getElementById("img2").src="imgs/cup.png";
  }
  else if(textboxno==3)
  {
    document.getElementById("winnertext3").innerHTML = x;
    document.getElementById("img3").src="imgs/cup.png";
  }
  else if(textboxno==4)
  {
    document.getElementById("winnertext4").innerHTML = x;
    document.getElementById("img4").src="imgs/cup.png";
  }
  else if(textboxno==5)
  {
    document.getElementById("winnertext5").innerHTML = x;
    document.getElementById("img5").src="imgs/cup.png";
  }
}