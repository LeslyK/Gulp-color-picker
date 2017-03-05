var r=100, g=100, b=100;

var R=125, G=125, B=125;

$(document).ready( function(){
	alert('Bonjour! la couleur du de la semaine: ? ');
	
	$('#rValue').on("change mousemove", function(){
		r = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		
	});

	$('#gValue').on("change mousemove", function(){
		g = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		
	});

	$('#bValue').on("change mousemove", function(){
		b = $(this).val();		
		$('#body').css({'background-color': 'rgb('+ r + ', ' +  g + ', ' + b +')'});
		
	});

	$('#RValue').on("change mousemove", function(){
		R=$(this).val();
		$('#body').css({'background': "linear-gradient(to right, rgb(" + R + "," + G + "," + B+ "),rgb(" + r + "," + g + "," + b + ")"}); 
		console.log(R);
	});

	$('#GValue').on("change mousemove", function(){
		G=$(this).val();
		$('#body').css({'background': "linear-gradient(to right, rgb(" + R + "," + G + "," + B+ "),rgb(" + r + "," + g + "," + b + ")"}); 
		console.log(G);
	});

	$('#BValue').on("change mousemove", function(){
		B=$(this).val();
		$('#body').css({'background': "linear-gradient(to right, rgb(" + R + "," + G + "," + B+ "),rgb(" + r + "," + g + "," + b + ")"}); 
		console.log(B);
	});
})