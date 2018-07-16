
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    //if (request.greeting == "hello")
      //sendResponse({farewell: "goodbye"});
      var searchTerm="https://www.google.co.in/search?q=\"\"*\"@";
      chrome.tabs.create({url: searchTerm + encodeURIComponent(request.greeting)+"\""});
  });
