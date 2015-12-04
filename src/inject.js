console.log("Hello. This message was sent from scripts/inject.js");

function playSound() {
	var myAudio = new Audio();        // create the audio object
	myAudio.src = "https://a.clyp.it/4wdkdhn5.mp3"; // assign the audio file to it
	myAudio.play();   
}

// instagram
$('.coreSpriteHeartOpen').on('click', function() {
	playSound();
});

// facebook - not working
$('.UFILikeLink').on('click', function() {
	playSound();
});