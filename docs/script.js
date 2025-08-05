const countdownContainer = document.getElementById("countdown-container");
const countdownEl = document.getElementById("countdown");
const teaserText = document.getElementById("teaser-text");
const clickBait = document.getElementById("click-bait");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("rickroll-video");

let count = 5;
countdownEl.textContent = count;

const interval = setInterval(() => {
  count--;
  if (count > 0) {
    countdownEl.textContent = count;
  } else {
    clearInterval(interval);
    showClickBait();
  }
}, 1000);

function showClickBait() {
  countdownEl.style.display = "none";
  teaserText.style.display = "none";
  clickBait.style.display = "block";
  countdownContainer.style.cursor = "pointer";

  countdownContainer.addEventListener("click", () => {
    startRickroll();
  }, { once: true });
}

function startRickroll() {
  countdownContainer.style.display = "none";
  videoContainer.style.display = "block";
  video.muted = false;
  video.loop = true;
  video.play();
  requestFullscreen(document.documentElement);
}

function requestFullscreen(el) {
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}
