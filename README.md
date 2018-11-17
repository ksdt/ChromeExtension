# KSDT Chrome Extension
A Chrome extension to listen to the KSDT live stream. AKA listen to some groovy tunes, man.

### Structure
`popup.html` is the HTML for the extension's pop-up screen in the top right corner of the browser and contains the buttons to control the audio stream (play, pause, stop, etc). It uses the `popup.js` script to message the persistent `background.js` background script what button was clicked, and `background.js` creates and controls the `audio` element for the stream.

There're currently three buttons: `PLAY`, `PAUSE`, and `STOP`. `PLAY` plays the stream (and loads it if necessary). `PAUSE` pauses the stream while maintaining the connection, so pressing `PLAY` after resumes the stream from wherever it was paused. `STOP` kills the connection to the stream, so pressing `PLAY` after reconnects to the stream and plays it live.

### TODO
+ use jQuery or keep it lightweight?
+ design/style `popup.html`
+ publish to Chrome Web Store

### Relevant Documentation
+ [Message Passing in Chrome Extensions](https://developer.chrome.com/extensions/messaging)
+ MDN Web Docs on [the HTML `audio` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [HTMLMediaElement.load()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/load), [HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play), and [HTMLMediaElement.pause()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause)