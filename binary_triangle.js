// 1     
// 10    
// 101   
// 1010  
// 10101 
// 101010

function formBinaryTriangle(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= n; j++) {
            if (j <= i) {
                if (j % 2 != 0) {
                    s += "1";
                }
                else {
                    s += "0";
                }

            }
            else {
                s += " ";

            }
        }
        console.log(s);
    }
}
formBinaryTriangle(6);