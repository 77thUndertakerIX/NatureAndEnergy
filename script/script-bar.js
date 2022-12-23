function openNav() {
    document.getElementById("side-bar").style.width = "35%";
    document.getElementById("container").style.filter = "blur(50%)"
    document.getElementById('main-body').style.backgroundColor = "rgb(36, 29, 28)";
}

function closeNav() {
    document.getElementById("side-bar").style.width = "0%";
    document.getElementById('main-body').style.backgroundColor = "rgba(142, 158, 252, 0.132)";
    document.getElementById("container").style.filter = "blur(0%)"
    
  }
function OpMorebtn(){
    document.getElementById("blnav-btn").style.margin="0";
    document.getElementById("blnav-btn").style.transition = "2s"
    //document.getElementById("blnav-btn").style.width="0";
    document.getElementById("MOption").style.width ="100%";
    document.getElementById("MOption").style.transition ="6s"
  }
function closeMorebtn(){
    document.getElementById("blnav-btn").style.marginLeft="50%"
    document.getElementById("blnav-btn").style.transition ="4s"
    //document.getElementById("blnav-btn").style.width="0";
    document.getElementById("MOption").style.width ="0";
    document.getElementById("MOption").style.transition ="1.75s"
  }