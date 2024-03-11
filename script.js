//slideshow stuff
const pausePlayBtns = document.querySelectorAll('.pause-play-btn');
const slideTracks = document.querySelectorAll('.slide-track');

pausePlayBtns.forEach((btn, index) => {
  let isPlaying = true;
  const slideTrack = slideTracks[index];

  btn.addEventListener('click', () => {
    if (isPlaying) {
      slideTrack.style.animationPlayState = 'paused';
      btn.textContent = 'Play';
    } else {
      slideTrack.style.animationPlayState = 'running';
      btn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  });
});



//modal image stuff 1
var modal = document.getElementById("myModal");

var img = document.getElementById("Monteverde_main");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


