function rollDice(){
    var j = 0;
    for (; j < 6; j++){
        document.getElementById("a" + j).value = Math.floor(Math.random() * 6) + 1;
    } 
    return;
}