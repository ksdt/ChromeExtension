console.log('go?');
var audio = new Audio('https://ksdt.ucsd.edu/stream.mp3');
chrome.runtime.onMessage.addListener(gotMessage);

function isPlaying(audioElement) {
  return !audioElement.paused;
}

function gotMessage(message, sender, sendResponse){
  if(message == "heey"){
    if(isPlaying(audio)){
      console.log('im paused');
      audio.pause();
    } else {
      console.log('im playing');
      audio.play();
    }
  }
}
