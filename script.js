document.getElementById("scores").onclick = function () {
    location.href = '';
}
   
document.getElementById("button").onclick = function () {
    const element = document.getElementById("timer"); 
    var time = 121;
    setInterval(function() {
        time--
        element.innerHTML = time
        if (time === 0) {
            setTimeout(function(){
                window.location.href = '';
            }, );
        }
    }, 1000);
}

document.getElementById("button").onclick = function () {
    
}