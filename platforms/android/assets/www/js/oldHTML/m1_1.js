$(document).ready(function(){
	setTimeout(function(){ chamarTelefone(); }, 4000);
	
	$('#audio1').on('playing', function() {
	  $('#tel1').attr("onClick","atividade(2)");
	});

	$('#audio2').on('ended', function() {
	   window.location.replace("m1_1_hit.html");
	});	
});

function chamarTelefone() {
	document.getElementById("audio1").play();
}

function atividade(caso){
	if(caso == '1'){
		parar('audio2'); tocar('audio1');
		document.getElementById('tel2').style.display='none';
		document.getElementById('tel1').style.display='inline-block';
	} else {
		parar('audio1'); tocar('audio2');
		document.getElementById('tel1').style.display='none';
		document.getElementById('tel2').style.display='inline-block';
	}
}
