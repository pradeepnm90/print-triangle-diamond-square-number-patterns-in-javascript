// *   
// **  
// *** 
// ****
// *** 
// **  
// * 

function formTriangle(n) {
    var k = 0;
    var mid = parseInt((n + 1) / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        i <= mid ? k++ : k--;
        for (var j = 1; j <= mid; j++) {
            if (j <= k && j >= 1) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}

formTriangle(7);