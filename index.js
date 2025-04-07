var randomNumber1 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);
if(randomNumber1===1){
    document.getElementById("im1").setAttribute("src","./images/dice1.png");
}
if(randomNumber1===2){
    document.getElementById("im1").setAttribute("src","./images/dice2.png");
}
if(randomNumber1===3){
    document.getElementById("im1").setAttribute("src","./images/dice3.png");
}
if(randomNumber1===4){
    document.getElementById("im1").setAttribute("src","./images/dice4.png");
}
if(randomNumber1===5){
    document.getElementById("im1").setAttribute("src","./images/dice5.png");
}
if(randomNumber1===6){
    document.getElementById("im1").setAttribute("src","./images/dice6.png");
}


var randomNumber2 = Math.floor((Math.random()*6)+1);
console.log(randomNumber2);
if(randomNumber2===1){
    document.getElementById("im2").setAttribute("src","./images/dice1.png");
}
if(randomNumber2===2){
    document.getElementById("im2").setAttribute("src","./images/dice2.png");
}
if(randomNumber2===3){
    document.getElementById("im2").setAttribute("src","./images/dice3.png");
}
if(randomNumber2===4){
    document.getElementById("im2").setAttribute("src","./images/dice4.png");
}
if(randomNumber2===5){
    document.getElementById("im2").setAttribute("src","./images/dice5.png");
}
if(randomNumber2===6){
    document.getElementById("im2").setAttribute("src","./images/dice6.png");
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player-1 Wins";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player-2 Wins";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It is a Draw";
}