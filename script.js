document.getElementById("scores").onclick = function () {
    document.getElementById().innerHTML = "";
}
   
document.getElementById("button").onclick = function () {
    const element = document.getElementById("timer"); 
    var time = 10;
    setInterval(function() {
        time--
        element.innerHTML = time
        if (time <= 0) {
            setTimeout(function() {
                document.getElementById("timer").innerHTML = "Your time has run out!";
                document.getElementById("begin").innerHTML = "Your score was " + varIABLE_for_Score;
                document.getElementById("scorebtn").innerHTML = "Enter your initials to see your score on the scoreboard.";
            });
        }
    }, 1000);
}

document.getElementById("begin").onclick = function () {
    document.getElementById("begin").style.display = "none";
    document.getElementById("scorebtn").style.display = "none";
}



