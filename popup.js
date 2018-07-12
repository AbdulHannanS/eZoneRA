//https://stackoverflow.com/questions/18694538/sending-message-from-popup-js-in-chrome-extension-to-background-js
var x=document.getElementById("changeColor").addEventListener("click", function(){chrome.runtime.sendMessage({greeting: document.getElementById("txtbx").value.toString().replace(/\\/g, '')});});


function f(){
/*var port = chrome.extension.connect({
      name: "Sample Communication"
 });
 port.postMessage(y.value.toString());
 port.onMessage.addListener(function(msg) {
      console.log("message recieved" + msg);
 });*/
 chrome.runtime.sendMessage({greeting: "hello"});
}
