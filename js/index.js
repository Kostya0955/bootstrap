var modal = document.getElementById("myModal");
var play = document.getElementById("play");


var span = document.getElementsByClassName("close")[0];

play.onclick = function() {
   modal.style.display = "block";
    }

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {
    $(".burger").on("click",function() {
        $("ul li").toggleClass("open");
    });
});