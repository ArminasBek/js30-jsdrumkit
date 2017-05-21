window.addEventListener("keydown", function(e){
	//console.log(e.key);
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);  
	if(!audio) return // stop the function from running if key is not assigned
	audio.currentTime = 0; //rewind the start.
	audio.play();
	key.classList.add('playing');
});

var keys = document.querySelectorAll('.key');