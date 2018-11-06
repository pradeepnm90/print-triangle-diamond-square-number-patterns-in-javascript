function generateNumberTriangle(v) {
    for (var i = 1; i <= v; i++) {
        var chars = " ";
        for (var j = 1; j <= v; j++) {
            if (j <= i) { chars += j + "  "; }
        }
        console.log(chars);
    }
}
generateNumberTriangle(7);