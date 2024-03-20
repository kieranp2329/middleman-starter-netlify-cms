// Function to handle carousel slide movement
function moveSlide(n) {
    var slides = document.getElementsByClassName("slides")[0];
    var slideWidth = slides.clientWidth;
    slides.scrollLeft += n * slideWidth;
  }
  