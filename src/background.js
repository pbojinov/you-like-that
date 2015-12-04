// Petar Bojinov
// 12/4/15
// https://github.com/pbojinov/you-like-that

// chrome.webRequest.onCompleted.addListener(function(details) {
//     var url = document.createElement('a');
//     url.href = details.url;
//     if (url.search && url.search.indexOf('ajaxpipe=1') !== -1) {
//         console.log('New page via AJAX.');
//         chrome.tabs.executeScript({'file' : 'inject.js'});
//     }
// }, {urls : ["*://*.facebook.com/*"]});

function playSound() {
    var myAudio = new Audio(); // create the audio object
    myAudio.src = "https://a.clyp.it/4wdkdhn5.mp3"; // assign the audio file to it
    // myAudio.src = "you-like-that-dont-you.mp3"; // assign the audio file to it
    myAudio.play();
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello") {
            playSound();
            sendResponse({
                farewell: "goodbye"
            });

        }
    });
