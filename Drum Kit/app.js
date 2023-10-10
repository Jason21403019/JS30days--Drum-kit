window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(key);
  if (!audio) return; // stop function from running together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
