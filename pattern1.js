// *******
// ******
// *****
// ****
// ***
// **
// *


function f(v) {

	for (var i = 1; i <= v; i++) {
		var chars = "";
		for (var j = 1; j <= v; j++) {

			if (j <= v + 1 - i) { chars += "*"; }

		}
		console.log(chars);

	}
}

f(7);