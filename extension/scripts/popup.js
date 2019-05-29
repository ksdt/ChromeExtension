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
	}
	else if (button.id == "pause")
	{
		button.src='./images/play_button.png';
		button.id="play";
		status="play";

		button.addEventListener('click', function() {
	    	chrome.extension.sendMessage({action: 'play'});
		});

		live.style.backgroundColor="gray";
	}
}

function stop(playbutton)
{
	var live = document.getElementById("circle");

	if (playbutton.id != "pause")
	{
		live.style.backgroundColor="red";

		return;
	}
	else if (playbutton.id == "pause")
	{
		playbutton.src='./images/play_button.png';
		playbutton.id="play";
		status="play";

		playbutton.addEventListener('click', function() {
	    	chrome.extension.sendMessage({action: 'play'});
		});

		live.style.backgroundColor="red";
	}
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

document.addEventListener('DOMContentLoaded', function () {
	var playbutton = document.getElementById("play");
	var button = document.getElementById("stop");

	button.addEventListener('click', function() { 
		stop(playbutton);
	});
});