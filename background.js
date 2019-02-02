var audio = new Audio('https://d1qg6pckcqcdk0.cloudfront.net/jazz/catsvschicks_fortyyearsofwom_12_anythingyoucando.m4a');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
  if(message == true){
    audio.play();
  } else {
    audio.pause();
  }
  chrome.runtime.sendMessage(message);
}
