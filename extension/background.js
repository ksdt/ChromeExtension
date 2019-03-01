// creates basic persistent DOM element without loading stream
window.addEventListener("load", function() {
let aux = document.createElement('audio');
// five minutes has passed boolean
let playId = document.getElementById('play');
let fivePassed = false;
let timer;
aux.type = 'audio/mp3';

function fiveMinuteTimer(){
	fivePassed = true;
	console.log(fivePassed);
	// change play button to live to show user it will be resynching
	playId.src='live_button2.png';
}

// handles requests sent from popup.js
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

	// resumes stream and loads stream if necessary
	if (request.action == 'play') {

		// if five min passed reset the stream by deleting connectiong first
		if (fivePassed && aux.hasAttribute('src')) {
			console.log("playing");
			aux.removeAttribute('src');
			aux.load(); // necessary? 
			// change live button back to play
			playId.src='play_button.png';
		}

		// if five minutes haven't gone by quit boolean function and just play
		else if (!fivePassed && aux.hasAttribute('src')) {
			// if hasn't finished can it delete it??? 
			window.clearTimeout(timer);
		}

		// make sure it is connected and play
		if (!aux.hasAttribute('src')) {
			aux.src= 'https://ksdt.ucsd.edu/stream.mp3';
			aux.load();
		}
		aux.play();
		console.log('play');
	}

	// pauses stream but maintains the connection
	if (request.action == 'pause') {
		aux.pause();
		// returns a handle after setting the 5 minutes bool (10 sec for now)
		timer = window.setTimeout(fiveMinuteTimer, 10000);
	}
	

});
});