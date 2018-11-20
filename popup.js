console.log('yo');
let isPlaying = false;
chrome.runtime.onMessage.addListener(function(message) {
  isPlaying= message;
});
document.getElementById('playButton').addEventListener('click', function() {
  chrome.runtime.sendMessage(!isPlaying);
  console.log(isPlaying);
  console.log('play presed');
});
