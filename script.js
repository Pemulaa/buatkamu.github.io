const overlay = document.getElementById("overlay");
const powerButton = document.getElementById("powerButton");

powerButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
