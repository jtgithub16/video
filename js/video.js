var video = document.querySelector(".video");
var isPause = false;
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	document.querySelector(".video").autoplay = false;
	video.pause();
	document.querySelector(".video").loop = false;

	//document.querySelector(".video").load();
//	document.querySelector("#volume").textContent = Math.round(video.volume*100) + "%";
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
	video.playbackRate /= 0.9
	console.log("Video Playback Rate" + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}
	
	console.log("Current Location" + video.currentTime.toFixed(1))
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	(document.querySelector("#mute").textContent == "Mute") 
		? document.querySelector("#mute").textContent = "Unmute" : document.querySelector("#mute").textContent = "Mute";
});	

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});	

document.querySelector("#slider").addEventListener("input", function() { //slider update
	video.volume = this.value/100;
	console.log(this.value)		
	document.querySelector("#volume").textContent = (this.value) + "%";


})