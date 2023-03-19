//For 1st dice//
var randomno1=Math.floor(Math.random()*6)+1;

var randomimg="dice"+randomno1+".png";
var randomimgsource="images/"+randomimg;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimgsource);

// for 2nd dice//
var randomno2=Math.floor(Math.random()*6)+1;

var randomimg2="dice"+randomno2+".png";
var randomimgsource2="images/"+randomimg2;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsource2);
//last 2 lines can be written as :
//document.querySelectorAll("img")[1].setAttribute("src",randomimgsource2)

//Text for winner
if(randomno1>randomno2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomno1<randomno2){
  document.querySelector("h1").innerHTML="Plaer 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
