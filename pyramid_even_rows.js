//1, 3, 5,7,9..     ---> Odd number series (stars and spaces inside not OUTER i.e STARSPACESTAR*) appear in pyramid pattern
//1, 2, 3,4,5..   ----> Counter (number of rows)

//For every each counter there exist 2*n-1 value
//     *    
//    * *   STARSPACESTAR
//   * * *  
//  * * * * 
// * * * * *

function pyramid(n) {  //Input or number of rows
    for (var i = 1; i <= n; i++) {
        var s = "";
        var k = 1;
        for (var j = 1; j <= (2 * n - 1); j++) {   ////For every each counter there exist 2*n-1 value with SPACES
            if (j >= n + 1 - i && j <= n - 1 + i && k) {
                s += "*";
                k = 0;
            }
            else {
                s += " ";
                k = 1;
            }
        }
        console.log(s);
    }
}
pyramid(3);
