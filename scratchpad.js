var style = document.createElement('style');
style.textContent = 
	"#fibber{"+
	"display:inline-block;"+
	"background-color:red;"+
	"width:8800px;"+
	"}"+
	" "+
	".fib-div{"+
	"color:white;"+
	"text-align:center;"+
	"background-color:rgba(0,0,0,0.1);"+
	"}"+
	" "+
	".fib-left{"+
	"float:left;"+
	"display:inline-block;"+
	"}"+
	" "+
	".fib-right{"+
	"float:right;"+
	"display:inline-block;"+
	"}"+
	" "+
	"#peller{"+
	"display:inline-block;"+
	"background-color:blue;"+
	"width:9400px;"+
	"}"+
	" "+
	".pell-div{"+
	"color:white;"+
	"text-align:center;"+
	"background-color: rgba(0,0,0,0.1);"+
	"}"+
	" "+
	".pell-left{"+
	"float:left;"+
	"display:inline-block;"+
	"}"+
	" "+
	".pell-right{"+
	"float:right;"+
	"display:inline-block;"+
	"}"+
	" "+
	"#tribber{"+
	"display:inline-block;"+
	"background-color:green;"+
	"width: 15000px"+
	"}"+
	" "+
	".trib-div{"+
	"color:white;"+
	"text-align:center;"+
	"background-color: rgba(0,0,0,0.1);"+
	"}"+
	" "+
	".trib-left{"+
	"float:left;"+
	"display:inline-block;"+
	"}"+
	" "+
	".trib-mid{"+
	"display: inline-block;"+
	"}"+
	" "+
	".trib-right"+
	"float:right;"+
	"display:inline-block;"+
	"}";

document.body.appendChild(style);


//fibonacci functions
function fibby(n){
	var value;
	var div = document.createElement('div');
	div.setAttribute("class", "fib-div");

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
		left.html.setAttribute("class", "fib-div fib-left");
		right.html.setAttribute("class", "fib-div fib-right");
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
	div.setAttribute("class", "pell-div");

	if(n<2){
		if(n===0){
			value = 0;
		} else {
			value = 1;
		}
		var p = document.createElement('p');
		p.textContent = "Pell("+n+") ="+value;
		div.appendChild(p);
	}else{
		var left = pelly(n-1);
		var right = pelly(n-2);
		value = 2*(left.value) + right.value;
		var p = document.createElement('p');
		p.textContent = "Pell("+n+") ="+value;
		left.html.setAttribute("class", "pell-div pell-left");
		right.html.setAttribute("class", "pell-div pell-right");
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
	div.setAttribute("class", "trib-div");

	if (n < 3){
		if(n===2){
			value = 1;
		} else {
			value = 0;
		}
		var p = document.createElement('p');
		p.textContent = "Trib("+n+") ="+value;
		div.appendChild(p);
	}else{
		var left = trelly(n-1);
		var mid = trelly(n-2);
		var right = trelly(n-3);
		value = left.value + mid.value + right.value;
		var p = document.createElement('p');
		p.textContent = "Trib("+n+") ="+value;
		left.html.setAttribute("class", "trib-div trib-left");
		mid.html.setAttribute("class", "trib-div trib-mid");
		right.html.setAttribute("class", "trib-div trib-right");
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

fibDiv.setAttribute("id", "fibber");
pellDiv.setAttribute("id", "peller");
tribDiv.setAttribute("id", "tribber");

//Slider & Button assignment

function clearTree(node){
	
}

//helper function that takes slider input
var slideUpdater(n, node){
	clearTree(node;)
	if (node === fibDiv){fib(n, node)}
	if (node === pellDiv){pell(n, node)}
	if (node === tribDiv){trib(n, node)}
}

//function to empty div

//slider to pick the iteration number

//button to update

document.body.appendChild(fibDiv);
document.body.appendChild(tribDiv);
document.body.appendChild(pellDiv);

//fib(11, fibDiv);
//pell(11, pellDiv);
//trib(11, tribDiv);
