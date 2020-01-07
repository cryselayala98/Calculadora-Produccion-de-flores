function produccion_miniclavel(){
	
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var c = parseFloat(document.getElementById('c').value);
	var d = parseFloat(document.getElementById('d').value);
	var e = parseFloat(document.getElementById('e').value);
	var hi = parseFloat(document.getElementById('hi').value);
	var hf = parseFloat(document.getElementById('hf').value);
	var mini = parseFloat(document.getElementById('mini').value);
	var minf = parseFloat(document.getElementById('minf').value);

	var result = (((a - b) * 50) + ((c - d) * 70) + e) / ((hf + (minf / 60)) - (hi + (mini / 60))) ;

	alert('El resultado es ' + result);

}

function produccion_rosas(){

	var a = parseFloat(document.getElementById('a1').value);
	var b = parseFloat(document.getElementById('b1').value);
	var c = parseFloat(document.getElementById('c1').value);
	var d = parseFloat(document.getElementById('d1').value);
	var e = parseFloat(document.getElementById('e1').value);
	var hi = parseFloat(document.getElementById('hi1').value);
	var hf = parseFloat(document.getElementById('hf1').value);
	var mini = parseFloat(document.getElementById('mini1').value);
	var minf = parseFloat(document.getElementById('minf1').value);

	var result = (((a - b) * 40) + ((c - d) * 48) + e) / ((hf + (minf / 60)) - (hi + (mini / 60))) ;

	alert('El resultado es ' + result);
}