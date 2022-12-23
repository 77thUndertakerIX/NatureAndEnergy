
window.onload = function () {
  let Interval;

  function PlayNPauseMusic() {
    const audio = document.getElementById("song");
    const icon = document.getElementById("Musicbtn");
    const Playing = "Now Playing";
    const Pause = "Paused";
    const textElement = document.getElementById("playing-status");
    
    if (audio.paused) {
      textElement.innerHTML = "";
      textElement.innerHTML += Playing;
      console.log("playing");
      audio.play();
      icon.src = "../image/playbtn.png";
      //console.log(Interval)
      // Start the interval again if it has been cleared
      if (Interval) {
        Interval = setInterval(BtnLV, 25);
      }
    } else {
      textElement.innerHTML = "";
      textElement.innerHTML += Pause;
      console.log("pause");
      audio.pause();
      icon.src = "../image/pausebtn2.png";
      clearInterval(Interval);
    }
  }
  
  //LV= light level
  let check = 0;
  let LV = 0.2;
  function BtnLV() {
    const icon = document.getElementById("Musicbtn");
    const textElement = document.getElementById("playing-status");
    //console.log(LV);
    icon.style.opacity = LV;
    textElement.style.opacity = LV
    if (check === 0) {
      LV +=0.01;
      if (LV >= 1) {
        check = 1;
      }
    } else {
      LV -= 0.01;
      if (LV <= 0.1) {
        check = 0;
      }
    }
  }
  
  Interval = setInterval(BtnLV, 25);
}
  
  

  