// Function to handle carousel slide movement
function moveSlide(n) {
    var slides = document.querySelector(".carousel .slides");
    var slideWidth = slides.clientWidth;
    slides.scrollLeft += n * slideWidth;
  }
  
  // Event delegation for prev and next buttons
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('prev')) {
      moveSlide(-1);
    } else if (event.target.classList.contains('next')) {
      moveSlide(1);
    }
  });
  