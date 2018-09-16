$(document).ready(function(){
	var userName = localStorage.userName;
	var words = [userName];
	
	wordfind.width = userName.length;
	wordfind.height = 3;
	wordfind.orientations = ["horizontal"];
	
	// start a word find game
	var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words',wordfind);
});

function congrats(){
	setTimeout(function(){ window.location.replace("m1_3_hit.html"); }, 1000);
}
