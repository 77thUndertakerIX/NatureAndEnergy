let speed = 100;
let counter = 0;
const text1 = "GIVES YOU A LIFE";
const text2 = "ENERGY";
const typingEffElement1 = document.getElementById("typing-eff");
const typingEffElement2 = document.getElementById("typing-eff2");

function typingEffect() {
  if (counter < text1.length + 1) {
    document.getElementById("typing-eff").innerHTML += text1.charAt(counter);
    counter++;
  } else if (counter >= text1.length + 1) {
    document.getElementById("typing-eff2").innerHTML += text2.charAt(counter - 17);
    counter++;
    if (counter == 40) {
      counter = 0;
      document.getElementById("typing-eff").innerHTML = "";
      document.getElementById("typing-eff2").innerHTML = "";
    }
  }
}

setInterval(typingEffect, speed);
