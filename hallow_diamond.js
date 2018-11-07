// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********


function hallowDiamond(n) {
    var k = 0;
    var mid = parseInt((n + 1) / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        i <= mid ? k++ : k--;
        for (var j = 1; j <= n; j++) {
            if (j <= (mid + 1 - k) || j >= (mid - 1 + k)) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }

}

hallowDiamond(9);