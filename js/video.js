var video;


// Page load
// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	
	video = this.document.getElementById("player1");

	video.autoplay = false;

	video.loop = false;

});

// Play Button
// Play the video and update the volume information.  
document.getElementById("play").addEventListener("click", function() {
	
	video.play();

	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";

});

// Pause Button
// Pause the video.
document.getElementById("pause").addEventListener("click", function() {

	video.pause()

});

// Slow Down
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.getElementById("slower").addEventListener("click", function() {

	video.playbackRate /= 1.10;
	console.log(video.playbackRate);

});

// Speed Up
// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.getElementById("faster").addEventListener("click", function() {

	video.playbackRate *= 1.10;
	console.log(video.playbackRate);

});

// Skip Ahead
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function() {

	let skip_ahead = video.currentTime + 10;

	if ( skip_ahead > video.duration )
	{
		skip_ahead = 0;
	}

	video.currentTime = skip_ahead;

});

// Mute
// Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {

	video.muted = !video.muted;

	this.innerHTML = video.muted ? "Unmute" : "Mute";

});

// Volume Slider
// Change the volume based on the slider and update the volume information.
document.getElementById("slider").addEventListener("change", function() {

	video.volume = this.value / 100;

	document.getElementById("volume").innerHTML = this.value + "%";

});

// Styled
// Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {

	video.classList.add("oldSchool");

});

// Original
// Remove the oldSchool class from the video.
document.getElementById("orig").addEventListener("click", function() {

	video.classList.remove("oldSchool");

});