// 1  
// 1  2  
// 1  2  3  
// 1  2  3  4  
// 1  2  3  4  5  
// 1  2  3  4  5  6  
// 1  2  3  4  5  6  7 

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