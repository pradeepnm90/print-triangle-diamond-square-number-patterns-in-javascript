function hallowTriangle(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) {
            if (j <= n + 1 - i || j >= n - 1 + i) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}

hallowTriangle(5);
