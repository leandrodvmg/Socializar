$(document).ready(function () {

			var monthNames = [ "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO" ]; 
			var dayNames= [ "DOMINGO","SEGUNDA-FEIRA","TERÇA-FEIRA","QUARTA-FEIRA","QUINTA-FEIRA","SEXTA-FEIRA","SÁBADO" ];

			var newDate = new Date();
			newDate.setDate(newDate.getDate());
				
			setInterval( function() {
				var hours = new Date().getHours();
				$(".hour").html(( hours < 10 ? "0" : "" ) + hours);
				var seconds = new Date().getSeconds();
				$(".second").html(( seconds < 10 ? "0" : "" ) + seconds);
				var minutes = new Date().getMinutes();
				$(".minute").html(( minutes < 10 ? "0" : "" ) + minutes);
				
				$(".month span,.month2 span").text(monthNames[newDate.getMonth()]);
				$(".date span,.date2 span").text(newDate.getDate());
				$(".day span,.day2 span").text(dayNames[newDate.getDay()]);
				$(".year span").html(newDate.getFullYear());
			}, 1000);	



			$(".outer").on({
				mousedown:function(){
					$(".dribbble").css("opacity","1");
				},
				mouseup:function(){
					$(".dribbble").css("opacity","0");
				}
			});



});