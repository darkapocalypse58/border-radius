
function tlRad(){
    var topLeft = document.getElementById("top-left-rad").value;
document.getElementById("square").style.borderTopLeftRadius = (topLeft) + 'px';
}


function trRad(){
    var topRight = document.getElementById("top-right-rad").value;
document.getElementById("square").style.borderTopRightRadius = (topRight) + 'px';
}


function blRad(){
    var bottomLeft = document.getElementById("bottom-left-rad").value;
document.getElementById("square").style.borderBottomLeftRadius = (bottomLeft) + 'px';
}


function brRad(){
    var  bottomRight = document.getElementById("bottom-right-rad").value;
document.getElementById("square").style.borderBottomRightRadius = (bottomRight) + 'px';
}

