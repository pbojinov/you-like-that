// Petar Bojinov
// 12/4/15
// https://github.com/pbojinov/you-like-that

console.log("Hello. This message was sent from scripts/inject.js");

function playSound() {
	// https://developer.chrome.com/extensions/messaging
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});
}

// instagram
$('.coreSpriteHeartOpen').on('click', function() {
	playSound();
});

// twitter 
// - violated CSP "media-src" so we moved audio to background
$('.js-actionFavorite').on('click', function() {
	playSound();
});

// vine - doesn't work either (ember)
$('.like').on('click', function() {
	playSound();
});

// facebook - not working, can't select like button (react)
$('.UFILikeLink').on('click', function() {
	playSound();
});


