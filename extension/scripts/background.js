window.addEventListener('load', function() {
	var aux = document.createElement('audio');
	var live = document.getElementById("circle");


	aux.type = 'audio/mp3';
	aux.src = 'https://ksdt.ucsd.edu/stream.mp3';

	var loaded;

	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

		if (loaded == false)
		{
			aux.load();
			loaded = true;
			live.style.backgroundColor="red";
		}

		if (request.action == 'play') 
		{
			aux.play();
		}
		else if (request.action == 'pause')
		{
			aux.pause();
			live.style.backgroundColor="gray";
		}
		else if (request.action == 'stop') 
		{
			aux.pause();
			loaded = false;
		}
	});
});