let speed = 200;
let counter = 0;
const text1 = "GIVES A LIFE";
const text2 = "ENERGY";
const typingEffElement1 = document.getElementById("typing-eff");
const typingEffElement2 = document.getElementById("typing-eff2");


function typingEffect() {
    if (counter < text1.length + 1) {
      document.getElementById("typing-eff").innerHTML += text1.charAt(counter);
      counter++;
    } else if (counter >= text1.length + 1) {
      document.getElementById("typing-eff2").innerHTML += text2.charAt(counter - 13);
      counter++;
      if (counter == 32) {
        counter = 0;
        document.getElementById("typing-eff").innerHTML = "";
        document.getElementById("typing-eff2").innerHTML = "";
      }
    }
  }
  
  setInterval(typingEffect, speed);

  