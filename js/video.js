var video = document.querySelector(".video");
var isPause = false;
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	document.querySelector(".video").autoplay = false;
	video.pause();
	document.querySelector(".video").loop = false;

	//document.querySelector(".video").load();
	document.querySelector("#volume").textContent = Math.round(video.volume*100) + "%";
});

//play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector(".video").play();
	document.querySelector("#volume").textContent = Math.round(video.volume*100) + "%";
});

//pause the video
document.querySelector("#pause").addEventListener("click", function() {
	if(video.paused){
		document.querySelector(".video").play();
	}
	else{
		document.querySelector(".video").pause();
	}	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video Playback Rate" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Video Playback Rate" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.duration - video.currentTime < 10){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	
	console.log("Current Location" + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	(document.querySelector("#mute").textContent == "Mute") ? document.querySelector("#mute").textContent = "Unmute" : document.querySelector("#mute").textContent = "Mute";
});	

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.toggle('oldSchool')
});	

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector(("#slider").value)/100	;
	let currentValue =  document.querySelector(("#slider").value);
	document.querySelector("#volume").textContent = currentValue + "%";


})