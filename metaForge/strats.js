var canvas = document.getElementById("drawBoard");
context = canvas.getContext("2d");

var utilityBox = document.getElementById("utility");
var loadOut = document.getElementById("team");
var toolBox = document.getElementById("tools");

 make_map();

function make_map(){
    base_image = new Image();
    base_image.src = "images/maps/de_cache.png";
    base_image.onload = function(){
        context.drawImage(base_image, 0, 0, 300, 150);
      }
}


function popUpUtility(){
    if(utilityBox.style.display === "none")
    {
        utilityBox.style.display = "block";

    } else {
        utilityBox.style.display = "none";
    }
}
function popUpTeam(){
    if(loadOut.style.display === "none")
    {
        loadOut.style.display = "block";

    } else {
        loadOut.style.display = "none";
    }
}

function popUpTool(){
    if(toolBox.style.display === "none")
    {
        toolBox.style.display = "block";

    } else {
        toolBox.style.display = "none";
    }
}

