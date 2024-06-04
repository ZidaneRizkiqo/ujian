function changeImage() {
    var menuImage = document.getElementById("menu");
    if (menuImage.src.includes("Hamburger-(1).svg")) {
        menuImage.src = "images/Hamburger.svg";
    } else {
        menuImage.src = "images/Hamburger-(1).svg";
    }
  }
    
    function myFunction() {
      let x = document.getElementById("hamburger-div");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }