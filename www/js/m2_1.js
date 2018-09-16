// ANALOG CLOCK
/*$(window).resize(function(){
	window.location.reload()
});*/

var correctHour;

$(document).ready(function(){
	var theminutes = (new Date().getMinutes());
	if(theminutes < 10){
		theminutes = "0"+theminutes;
	}
	
	var hours = [getHour(0)+":00", getHour(1)+":00", getHour(2)+":00"];
	correctHour = hours[0];
	 
	shuffleArray(hours);
	setHour(hours);
		
	//var audioElement = new Audio("");

	//clock plugin constructor
	$('#clock_analog').thooClock({
		size:$(document).height()/2.2,
		showNumerals:true,
	});
	
});

function setHour(hours){
		
	$("#h0").html(hours[0]);
	$("#h1").html(hours[1]);
	$("#h2").html(hours[2]);
}

function getHour(add){
	var thehours = new Date().getHours();
	
	thehours = ((thehours + 11) % 12 + 1);
	thehours += add;
	
	if(thehours > 12){
		thehours -= 12;
	}

	return thehours;
}

function validate(id){
	thehours = $("#"+id).text();
	if(correctHour == thehours){
		congrats();
	} else {
		easier(id);
	}
}

function congrats(){
	setTimeout(function(){ window.location.replace("m2_1_hit.html"); }, 1000);
}

function easier(id){
	document.getElementById(id).style.display='none';
}
