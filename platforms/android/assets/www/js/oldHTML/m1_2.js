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
	
});
	
function timeNow(){
	var thehours = new Date().getHours();

	if (thehours >= 0 && thehours < 12) {
		return 'bom_dia';

	} else if (thehours >= 12 && thehours <= 17) {
		return 'boa_tarde';

	} else if (thehours > 17 && thehours < 24) {
		return 'boa_noite';
	}
}


function validate(res){
	var now = timeNow();
	if(now == res){// acertou 100%
		congrats(res);
	} else if(res == 'boa_noite'){// now=(dia || tarde)		res=noite
		easier(res);
	} else if(now == 'boa_tarde'){// now=tarde		res=(dia || tarde)
		congrats(res); 
	} else {
		easier(res);
	}
}

function congrats(res){
	localStorage.greetingImage = res;
	var greetingText = res.replace("_", " ").toUpperCase();		//remove underscore and set uppercase
	localStorage.greetingText = greetingText;
	setTimeout(function(){ window.location.replace("m1_2_hit.html"); }, 1000);
}

function easier(res){
	document.getElementById(res).style.display='none';
}
