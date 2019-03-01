// sends requests to background.js once popup.html loads
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('play').addEventListener('click', function() {
		chrome.extension.sendMessage({action: 'play'});
	});
	document.getElementById('pause').addEventListener('click', function() {
		chrome.extension.sendMessage({action: 'pause'});
	});
});