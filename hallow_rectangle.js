// *******
// *     *
// * *** *
// * * * *
// * *** *
// *     *
// *******
function formHallowRect() {
    for (var i = 1; i <= 7; i++) {
        var s = "";
        for (var j = 1; j <= 7; j++) {
            if ((i == 1 || i == 7 || j == 1 || j == 7)
                ||
                ((i >= 3 && i <= 5 && j >= 3 && j <= 5))
                && (i == 3 || i == 5 || j == 3 || j == 5)) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }

}

formHallowRect();
