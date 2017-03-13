//fibonacci functions
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


//pell functions
function pelly(n){
	var value;
	var div = document.createElement('div');

	if(n<2){
		if(n===0){
			value = 0;
		} else {
			value = 1;
		}
		var p = document.createElement(p);
		p.textContent = "Pell("+n+") ="+value;
		div.appendChild(p);
	}else{
		var left = pelly(n-1);
		var right = pelly(n-2);
		value = 2*(left.value) + right.value;
		var p = document.createElement(p);
		p.textContent = "Pell("+n+") ="+value;
		div.appendChild(p);
		div.appendChild(left.html);
		div.appendChild(right.html);
	}	
	return {'value':value, 'html':div};
}
var pell = function(n, node){
	var tree = pelly(n);
	node.appendChild(tree.html);
}

//tribonacci functions
function trelly(n){
	var value;
	var div = document.createElement('div');

	if (n < 3){
		if(n===2){
			value = 1;
		} else {
			value = 0;
		}
		var p = document.createElement(p);
		p.textContent = "Trib("+n+") ="+value;
		div.appendChild(p);
	}else{
		var left = trelly(n-1);
		var mid = trelly(n-2);
		var right = trelly(n-3);
		value = left.value + mid.value + right.value;
		var p = document.createElement(p);
		p.textContent = "Trib("+n+") ="+value;
		div.appendChild(p);
		div.appendChild(left.html);
		div.appendChild(mid.html);
		div.appendChild(right.html);
	}
	return {'value':value, 'html':div};
}
var trib = function(n, node){
	var tree = trelly(n);
	node.appendChild(tree.html);
}

var fibDiv = document.createElement('div');
var tribDiv = document.createElement('div');
var pellDiv = document.createElement('div');

document.body.appendChild(fibDiv);
document.body.appendChild(tribDiv);
document.body.appendChild(pellDiv);

fib(11, fibDiv);
pell(11, pellDiv);
trib(11, tribDiv);
