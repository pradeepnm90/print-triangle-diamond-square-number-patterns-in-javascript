//1, 3, 5,7,9..     ---> Odd number series (stars) appear in pyramid pattern
//1, 2, 3,4,5..   ----> Counter (number of rows)

//For every each counter there exist 2*n-1 value

//1     *    
//2    ***   
//3   *****  
//4  ******* 
//5 *********
function pyramid(n) {  //Input or number of rows
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) {   ////For every each counter there exist 2*n-1 value
            debugger;
            if (j >= n + 1 - i && j <= n - 1 + i) {
                s += "*";
            }
            else {
                s += " ";   //Check the work book image
            }
        }
        console.log(s);
    }
}
pyramid(5);
