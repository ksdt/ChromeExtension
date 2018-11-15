// creates basic persistent DOM element without loading stream
var aux = document.createElement('audio');
aux.type= 'audio/mp3';

// handles requests sent from popup.js
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

	// resumes stream and loads stream if necessary
	if (request.action == "play") {
		if (!aux.hasAttribute('src')) {
			aux.src= 'https://ksdt.ucsd.edu/stream.mp3';
			aux.load();
		}
		aux.play();
	}

	// pauses stream but maintains the connection
	if (request.action == "pause") {
		aux.pause();
	}

	// completely deletes the connection to the stream
	if (request.action == "stop") {
		aux.pause();
		aux.removeAttribute('src');
		aux.load();
	}

});