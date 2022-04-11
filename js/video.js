var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


var volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	playBackRate = video.playbackRate;
	volume = document.getElementById('slider').value;

	/* ---------------- Pause Video ---------------- */
	document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
	});

	/* ---------------- Play Video ---------------- */
	document.querySelector("#play").addEventListener("click", function() {
	video.play(); 
	document.getElementById("volume").innerHTML = volume + "%";
	console.log("Play Video");
	});

	/* ---------------- Slow Down ---------------- */
	document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.95;
	console.log("New speed is  " + video.playbackRate);
	});

	/* ---------------- Speed Up ---------------- */
	document.querySelector("#faster").addEventListener("click", function() {
   	video.playbackRate = video.playbackRate/0.95;
	console.log("New speed is  " + video.playbackRate);
	});

	/* ---------------- Skip Ahead ---------------- */

	video.addEventListener('ended', function(){
  		// Reset the video to 0
  			video.currentTime = 0;
  			videoEndFlag = true;
  			console.log("Going back to the beginning");
  			console.log("New Location " + video.currentTime);
  		// And play again
  			video.play();
	});

	document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);	
    	video.currentTime += 15;
    	if(video.currentTime < video.duration) {
		console.log("New Location " + video.currentTime);
	 	}

	});

	/* ---------------- Mute / Unmute ---------------- */
	document.querySelector("#mute").addEventListener("click", function() {
    	if (video.muted === false) {    
      		 video.muted = true;
      		 document.getElementById("mute").innerHTML = "Unmute";
		}
		else {
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
		}
	});

	/* ---------------- Volume Slider ---------------- */
	document.getElementById('slider').addEventListener('change',function(){
    	video.volume = this.value / 100;
    	volume = video.volume*100;
    	document.getElementById("volume").innerHTML = volume + "%";
    	console.log(video.volume);
	});

	/* ---------------- Old School  ---------------- */
	document.getElementById('vintage').addEventListener('click',function(){
    	video.classList.add('oldSchool');
//     	console.log("Old School");
	});

	/* ---------------- Original  ---------------- */
	document.getElementById('orig').addEventListener('click',function(){
    	video.classList.remove('oldSchool');
//     	console.log("Original");
	});
});



