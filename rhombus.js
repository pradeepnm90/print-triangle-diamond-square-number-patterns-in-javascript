//          **********
//         ********** 
//        **********  
//       **********   
//      **********    
//     **********     
//    **********      
//   **********       
//  **********        
// ********** 

function formRhombus(n) {
    var mid = parseInt((n + 1) / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= (2 * n - 1); j++) {
            if (j >= (n + 1 - i) && j <= (2 * n - i)) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }

}
formRhombus(10);