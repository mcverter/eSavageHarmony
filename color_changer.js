function getNextColor(colval) {
    var rgb = /(\d+),\s*(\d+),\s*(\d+)/;
    result = colval.match(rgb);
    red = parseInt(result[1]);
    green = parseInt(result[2]);
    blue = parseInt(result[3]);
    increment = 1;
    nextred = (red + increment) % 256;
    nextblue = (blue + increment) % 256;
    nextgreen = (green + increment) % 256;

    nextcolor = "rgb(" + nextred + ", " + nextgreen + ", " + nextblue + ")";
    return nextcolor;
}

function changeColor()
{
    var elt = document.getElementById("content");
    console.log(elt);
    var cs = window.getComputedStyle(elt);
    console.log(cs);
    var clr = cs.color;
    var bgcol = cs.backgroundColor;
    
    var nextcol = getNextColor(clr);
    var nextbg = getNextColor(bgcol);
    
    console.log(clr);
    console.log(bgcol);
    console.log(nextcol);
    console.log(nextbg);

    elt.style.color = nextcol;
    elt.style.backgroundColor = nextbg;
    alert(elt);
    
    t=setTimeout(function(){changeColor()},250);
}

