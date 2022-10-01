/*
document.getElementById("submit_answer").onclick = function (event) {
    event.preventDefault();
    if (document.getElementById("song_1").checked) {
        document.getElementById("answer_check").innerHTML = "You selected the fourth answer choice.";
    } else if (document.getElementById("song_37").checked) {
        document.getElementById("answer_check").innerHTML = "You selected the first answer choice.";
    } else if (document.getElementById("song_59").checked) {
        document.getElementById("answer_check").innerHTML = "You selected the second answer choice.";
    } else if (document.getElementById("song_68").checked) {
        document.getElementById("answer_check").innerHTML = "You selected the third answer choice.";
    } 
} 
*/

document.getElementById("submit_answer").onclick = function (event) {
    event.preventDefault();
    if (document.getElementById("song_1").checked) {
        document.getElementById("answer_check").innerHTML = "Correct!";
        input === true;
    } else {
        document.getElementById("answer_check").innerHTML = "Incorrect :(";
        input === false;
    }
}