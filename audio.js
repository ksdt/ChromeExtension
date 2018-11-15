
document.addEventListener("load", function () {
  chrome.browserAction.addEventListener("click", function() {
    togglePlay();
  })
})

togglePlay() {
  var audio = new Audio('https://ksdt.ucsd.edu/stream.mp3');
  if (audio.isPlaying()){
    audio.pause();
  } else {
    audio.play();
  }
}




function mediaPlaybackRequiresUserGesture() {
  var audio = document.createElement('https://ksdt.ucsd.edu/stream.mp3');
  if(audio.paused){
    audio.play();
  }
  else{
    audio.pause();
  }
}
var audio = new Audio('https://ksdt.ucsd.edu/stream.mp3');
isPlaying = false;
if(isPlay){
  audio.play();
}
else{
  audio.pause();
}
