function pyramid(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        var k = 1;
        for (var j = 1; j <= (2 * n - 1); j++) {
            if (j >= n + 1 - i && j <= n - 1 + i) {
                s += k;
                j < n ? k++ : k--;
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}
pyramid(6);