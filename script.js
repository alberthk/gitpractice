var css = document.querySelector("h3");
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

colorInput1.value = "#ff0000";
colorInput2.value = "#ffff00";
css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ colorInput1.value 
	+ ", " 
	+ colorInput2.value 
	+ ")";

	css.textContent = concat2(body.style.background,";");
}

function rng16(){
	return Math.floor(Math.random()*16);
}

function setRgb(){
	var x = hexRandomizer() + hexRandomizer() + hexRandomizer();
	return x;
}

function concat2(a,b){
	var x = a + b;
	return x;
}

function hexRandomizer(){
	var hexString1 = rng16();
	var hexString2 = rng16();
	var hexString = concat2(hexString1.toString(16),hexString2.toString(16));
	return hexString;
}

function rgbRandomizer(){
	var rgb1 = setRgb();
	var rgb2 = setRgb();
	colorInput1.value = concat2("#",rgb1);
	colorInput2.value = concat2("#",rgb2);
	setGradient();
}


button.addEventListener("click", rgbRandomizer);

// colorInput1.addEventListener("input", setGradient);

// colorInput2.addEventListener("input", setGradient);