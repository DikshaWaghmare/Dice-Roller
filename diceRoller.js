function randomDice() {
    var randomNo= Math.floor(Math.random() * 6) + 1;
    document.getElementById("ans").innerHTML=randomNo;
    if(randomNo==1){
     document.getElementById("dice").innerHTML='<img class="img" src ="1-dice.jpg">';
    }
    if(randomNo==2){
      document.getElementById("dice").innerHTML='<img class="img" src ="2-dice.jpg">';
    }
    if(randomNo==3){
      document.getElementById("dice").innerHTML='<img class="img" src ="3-dice.jpg">';
    }
    if(randomNo==4){
      document.getElementById("dice").innerHTML='<img class="img" src ="4-dice.jpg">';
    }
    if(randomNo==5){
      document.getElementById("dice").innerHTML='<img class="img" src ="5-dice.jpg">';
    }
    if(randomNo==6){
      document.getElementById("dice").innerHTML='<img class="img" src ="6-dice.jpg">';
    }
  }