onload = () => {
  document.body.classList.remove("container");
};
var audioPlaying = false;
function music(){
  var audio = document getElemenById("bgmusic");
  if (l audioPlaying) audio.play()
  else audio.pause();
audioPlaying = l audioPlaying;
}