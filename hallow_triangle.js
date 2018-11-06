function hallowTriangle() {
    for (var i = 1; i <= 5; i++) {
        var s = "";
        for (var j = 1; j <= 9; j++) {
            if (j <= 6 - i || j >= 4 + i) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}

hallowTriangle();
