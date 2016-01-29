$(document).ready(function(){

	var myInterval = setInterval(animate, 1000/30);

	
	function draw(){
		var canvas = document.getElementById("canvas");
		var ctx= canvas.getContext('2d');
		

		ctx.beginPath();
		ctx.arc(100, 75, 50, 0, Math.PI*2);
		ctx.stroke();

	}
	
	

	draw();

});