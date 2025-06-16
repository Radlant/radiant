function changeColor() {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
  const sound = document.getElementById("clickSound");
sound.currentTime = 0; // rewind to start if it's already playing
sound.play();
}
