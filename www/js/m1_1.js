$(document).ready(function(){
		
	$(".word").sortable({
		update : function(event, ui) {
			var order = $(this).sortable('toArray').toString();
			if(order === "o,l,a"){					
				$(".word").sortable("disable");
				congrats();
			}
		}
	});
});


function congrats(){
	setTimeout(function(){ window.location.replace("m1_1_hit.html"); }, 800);
}
