function toggle(button)
{
	var live = document.getElementById("circle");

	if (button.id != "pause")
	{
		button.src='./images/pause_button.png';
		button.id="pause";
		status="pause";

		button.addEventListener('click', function() {
			chrome.extension.sendMessage({action: 'pause'});
		});

		live.style.backgroundColor="gray";
	}
	else if (button.id == "pause")
	{
		button.src='./images/play_button.png';
		button.id="play";
		status="play";

		button.addEventListener('click', function() {
	    	chrome.extension.sendMessage({action: 'play'});
		});

		live.style.backgroundColor="red";
	}

	return false;
}

// sends requests to background.js once popup.html loads
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('play').addEventListener('click', function() {
	    chrome.extension.sendMessage({action: 'play'});
	});
	document.getElementById('stop').addEventListener('click', function() {
		chrome.extension.sendMessage({action: 'stop'});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.getElementById("play");

	button.addEventListener('click', function() { 
		toggle(button);
	});
});