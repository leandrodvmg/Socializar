// ANALOG CLOCK
/*$(window).resize(function(){
	window.location.reload()
});*/
$(document).ready(function(){

	var audioElement = new Audio("");

	//clock plugin constructor
	$('#clock_analog').thooClock({
		size:$(document).height()/2.2,
		showNumerals:true,
	});
	
	
	//AUDIO
	$('#audio1').on('ended', redirect);
	
});
	
function now(){
	var thehours = new Date().getHours();

	if (thehours >= 0 && thehours < 12) {
		return 'bom_dia';

	} else if (thehours >= 12 && thehours <= 17) {
		return 'boa_tarde';

	} else if (thehours > 17 && thehours < 24) {
		return 'boa_noite';
	}
}


function validate(input){
	var res = now();
	if(now == res){// acertou 100%
		congrats();
	} else if(now == 'boa_noite'){// now=noite 				res=(dia || tarde)
		return easier(res);
	} else {// now=(dia || tarde)		res=(dia || tarde)
		return congrats(); 
	}
}

function congrats() {
	document.getElementById("audio1").play();
}

function redirect(){
	setTimeout(function(){ window.location.replace("index.html"); }, 3000);
}

function easier(res){
	document.getElementById(res).style.display='none';
}
