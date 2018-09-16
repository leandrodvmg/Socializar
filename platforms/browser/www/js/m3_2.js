		var startTime = new Date(), endTime;

		function endClock() {
		  endTime = new Date();
		  var timeDiff = endTime - startTime; //in ms
		  // strip the ms
		  timeDiff /= 1000;

		  // get seconds 
		  var seconds = Math.round(timeDiff);
		  return seconds;
		}
		
		!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
        
        function start_puzzle(x){
            $('#puzzle_solved').hide();
            $('#source_image').snapPuzzle({
                rows: x, columns: x,
                pile: '#pile',
                containment: '#puzzle-containment',
                onComplete: function(){
                    $('#source_image').fadeOut(150).fadeIn();
                    setTimeout(function(){ window.location.replace("m4.html"); }, 800);
                                
                    if (typeof(Storage) === "undefined") {
						console.log("Sorry! No Web Storage support...");
					} else {
						endTime = endClock();
						if (typeof(localStorage.m12) === "undefined") {
							localStorage.m12 = endTime;
							localStorage.p12 = 2;
						} else {
							if((localStorage.p12 < 4) && (endTime < localStorage.m12)){
								localStorage.p12++;
							}
							localStorage.m12 = endTime;
						}
					}
                }
            });
        }

        $(function(){
			
            $('#pile').height($('#source_image').height());
            
            if (typeof(Storage) === "undefined") {
				console.log("Sorry! No Web Storage support...");
				
				start_puzzle(2);
				
			} else {
				if (typeof(localStorage.p12) === "undefined") {
					start_puzzle(2);
				} else {
					start_puzzle(localStorage.p12);
				}
			} 

            $('.restart-puzzle').click(function(){
                $('#source_image').snapPuzzle('destroy');
                start_puzzle($(this).data('grid'));
            });

            $(window).resize(function(){
                $('#pile').height($('#source_image').height());
                $('#source_image').snapPuzzle('refresh');
            });
        });
        	
