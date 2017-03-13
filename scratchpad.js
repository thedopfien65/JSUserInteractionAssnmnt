function fibby(n){
	var value;
	var div = document.createElement('div');

	if(n<2){
		if(n === 0) {
			value = 0;
		} else {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = "Fib("+n+") ="+value;
		div.appendChild(p);

	} else {
		var left = fibby(n-1);
		var right = fibby(n-2);
		value = left.value + right.value;
		var p = document.createElement('p');
		p.textContent = "Fib("+n+") =" + value;
		div.appendChild(p);
		div.appendChild(left.html);
		div.appendChild(right.html);
	}
	return {'value':value, 'html':div};

}

var fib = function(n, node){
	var tree = fibby(n);
	node.appendChild(tree.html);
}

var fibDiv = document.createElement('div');
var tribDiv = document.createElement('div');
var pellDiv = document.createElement('div');

document.body.appendChild(fibDiv);
document.body.appendChild(tribDiv);
document.body.appendChild(pellDiv);

fib(11, fibDiv);
