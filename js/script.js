function playSound(e){
	//console.log(e.key);
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);  
	if(!audio) return // stop the function from running if key is not assigned
	audio.currentTime = 0; //rewind the start.
	audio.play();
	key.classList.add('playing');

};

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

function foo(e) {
	console.log(e);
}

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);
window.addEventListener("click", foo); 
