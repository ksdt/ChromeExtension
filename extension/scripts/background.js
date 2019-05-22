window.addEventListener("load", function() {
	let aux = document.getElementById("stream");
	
	let loaded = false;

	if (loaded == false)
	{
		aux.load();
		loaded = true;
	}

	chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.action == 'play') 
		{
			aux.play();
		}
		else if (request.action == 'pause') 
		{
			aux.pause();
		}
		else if (request.action == 'stop') 
		{
			aux.pause();
			loaded = false;
		}
	});
});