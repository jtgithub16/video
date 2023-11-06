var video = document.querySelector(".video");
var isPause = false;
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	document.querySelector(".video").autoplay = false;
	video.pause();
	document.querySelector(".video").loop = false;

	//document.querySelector(".video").load();
	video.volume = document.quertySelector("#slider").value / 100;
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