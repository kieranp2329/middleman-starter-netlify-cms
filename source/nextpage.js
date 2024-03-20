document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel .slides img');
    const totalSlides = slides.length;
  
    // Show the first slide initially
    showSlide(slideIndex);
  
    // Function to move to the next slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0; // Loop back to the first slide
      }
      showSlide(slideIndex);
    }
  
    // Function to move to the previous slide
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Go to the last slide
      }
      showSlide(slideIndex);
    }
  
    // Function to display the current slide
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.style.display = 'none'; // Hide all slides
      });
      slides[index].style.display = 'block'; // Show the current slide
    }
  
    // Event listeners for next and previous buttons
    const nextBtn = document.querySelector('.carousel .next');
    const prevBtn = document.querySelector('.carousel .prev');
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  });
  