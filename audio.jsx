
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


var audioElement = document.createElement('audio');
audioElement.setAttribute("preload", "auto");
audioElement.autobuffer = true;

var source1 = document.createElement('source');
source1.type= 'audio/mpeg';
source1.src= 'https://ksdt.ucsd.edu/stream.mp3';
audioElement.appendChild(source1);

chrome.extension.onMessage.addListener(
   function(request, sender, sendResponse) {
     if (request.action == "play"){
         audioElement.load;
         console.log('im playing');
         audioElement.play();
     }
});


document.addEventListener("DOMContentLoaded", function() {
  console.log('got loaded');
  document.getElementById('playButton').click(function(){
     console.log('got clicked');
     chrome.extension.sendMessage({action: "play"})
  });
});
