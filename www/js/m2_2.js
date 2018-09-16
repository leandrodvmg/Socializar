$(document).ready(function() {
	$("#h1-header").text("ENCONTRE O NÚMERO "+new Date().getDate());
		$(".datepicker").datepicker({
			dateFormat: 'dd/mm/yy',
			dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
			dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
			dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
			monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
			monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
			nextText: '',
			prevText: '',
			onSelect: function (date) {
				var d = new Date();
				var day = d.getDate(), month = d.getMonth()+1, year = d.getFullYear();
				
				if(day < 10){
					day = "0"+day;
				}
				
				if(month < 10){
					month = "0"+month;
				}
				
				var res = (day+"/"+month+"/"+year);
				
				if(res == date){
					setTimeout(function(){ window.location.replace("m2_2_hit.html"); }, 600);
				}
			}
		});
});	
