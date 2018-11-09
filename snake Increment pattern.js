// 1        
// 3*2      
// 4*5*6    
// 10*9*8*7  
// 11*12*13*14*15

function formSnakePattern(n) {
    var k = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            k = k + 1;
        }
        else {
            k--;
            k = k + i
        }
        var s = ""; flag = 1; var p = k;
        for (var j = 1; j <= (2 * n) - 1; j++) {
            if (j >= 1 && j <= (2 * i) - 1) {
                if (flag) {
                    s += p;
                    if (i % 2) {
                        p++; k++;
                    }
                    else {
                        p--;
                    }
                }
                else {
                    s += "*";
                }
                flag = 1 - flag;
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}
formSnakePattern(5);