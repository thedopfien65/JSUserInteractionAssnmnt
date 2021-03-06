var style = document.createElement('style');
style.textContent = 
	"#fibTree{"+
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
	"#pellTree{"+
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
	"#tribTree{"+
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

var fibDiv = document.getElementById('fibTree');
var tribDiv = document.getElementById('tribTree');
var pellDiv = document.getElementById('pellTree');

fib(5, fibDiv);
pell(5, pellDiv);
trib(5, tribDiv);

//Slider & Button assignment
var fibBtn = document.getElementById('fib-button');
fibBtn.innerHTML = "Fib("+document.getElementById('fib-slide').value+")";

var pellBtn = document.getElementById('pell-button');
pellBtn.innerHTML = "Pell("+document.getElementById('pell-slide').value+")";

var pellBtn = document.getElementById('trib-button');
pellBtn.innerHTML = "Trib("+document.getElementById('trib-slide').value+")";

//function to empty div
var clearTree = function(node){
	var c = document.getElementById(node);
	while(c.hasChildNodes()){
			c.removeChild(c.lastChild);
	}
}

function updateBtn(node, btn){
	var b = document.getElementById(btn);
	if(btn == 'fib-button'){var f = "Fib";}
	if(btn == 'pell-button'){var f = "Pell";}
	if(btn == 'trib-button'){var f = "Trib";}
	b.innerHTML = f+"("+node.value+")";
}

function updateTree(slide, node){
	clearTree(node);
	var newDiv = document.getElementById(node);
	var slider = document.getElementById(slide);
	var newNum = slider.value;
	if(node == 'fibTree'){fib(newNum, newDiv);}
	if(node == 'pellTree'){pell(newNum, newDiv);}
	if(node == 'tribTree'){trib(newNum, newDiv);}
}