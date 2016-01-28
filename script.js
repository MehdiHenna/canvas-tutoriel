$(document).ready(function(){

	
	
	function draw(){
		var canvas = document.getElementById("canvas");
		var ctx= canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 75, 50, 0, Math.PI*2);
		ctx.stroke();

		
		
	}
	draw();

});