//    1   
//   212  
//  32123 
// 4321234

function generateMidNumberTriangle(n) {
    var midOfCol = parseInt(((2 * n - 1) + 1) / 2)
    for (var i = 1; i <= n; i++) {
        var k = i;
        var s = " ";
        for (var j = 1; j <= (2 * n - 1); j++) {
            //  debugger;
            if (j >= n + 1 - i && j <= n - 1 + i) {
                s += k;
                j < midOfCol ? k-- : k++;
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}
generateMidNumberTriangle(4);