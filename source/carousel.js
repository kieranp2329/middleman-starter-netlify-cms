// Function to handle carousel slide movement
function moveSlide(n) {
    var slides = document.querySelector(".carousel .slides");
    var slideWidth = slides.clientWidth;
    slides.scrollLeft += n * slideWidth;
}

// Event delegation for prev and next buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('prev')) {
                moveSlide(-1);
            } else if (this.classList.contains('next')) {
                moveSlide(1);
            }
        });
    });
});
