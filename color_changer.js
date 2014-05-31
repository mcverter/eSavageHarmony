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
    var allColorChangers = document.getElementsByClassName("color_changer")

    for (var i=0; i<allColorChangers.length; i++) {
        var elt = allColorChangers[i];
        var cs = window.getComputedStyle(elt);

        var clr = cs.color;
        var bgcol = cs.backgroundColor;

        var nextcol = getNextColor(clr);
        var nextbg = getNextColor(bgcol);
        elt.style.color = nextcol;
        elt.style.backgroundColor = nextbg;
    }

    t=setTimeout(function(){changeColor()},250);
}

