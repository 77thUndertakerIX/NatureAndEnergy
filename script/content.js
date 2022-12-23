window.onload = function() {
    const mainBodyElement = document.querySelector('.main-body');
    const content_box = document.getElementById("content");

    mainBodyElement.addEventListener('mouseenter', () => {
      console.log('mouseEnter')
      content_box.style.height = "100%"
      mainBodyElement.style.backgroundColor = "rgba(3, 3, 3, 0.95)";
    });
    
    mainBodyElement.addEventListener('mouseleave', () => {
        console.log('mouseLeave')
        content_box.style.height = "0"
        mainBodyElement.style.backgroundColor = "rgba(142, 158, 252, 0.132)";
    });
  };
  