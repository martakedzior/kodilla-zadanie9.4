// scripts.js
// Zadanie 9.4

var n;

n = prompt ('Enter number of lines in console');

function drawTree(n) {
	for (i=0 ; i < n ; i++) {

		var star = " ";
		for (j=0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(n);
