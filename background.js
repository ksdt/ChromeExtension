console.log('bg running bruh');
var audio = new Audio('https://ksdt.ucsd.edu/stream.mp3');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
  if(message === true){
    audio.play();
  } else {
    audio.pause();
  }
  chrome.runtime.sendMessage(message);
}
