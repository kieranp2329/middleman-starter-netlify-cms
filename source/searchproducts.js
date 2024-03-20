document.addEventListener('DOMContentLoaded', function() {
  // Get the search input element
  const searchInput = document.querySelector('#search-input');

  // Get all the product elements
  const products = document.querySelectorAll('.product');

  // Function to handle search
  const handleSearch = function() {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(function(product) {
      const title = product.querySelector('.title').textContent.toLowerCase();

      if (title.includes(searchTerm)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  };

  // Attach event listener to search input
  searchInput.addEventListener('input', handleSearch);

  // Integrated navigation function
  (function() {
    var t, e;
    t = document.querySelector('.nav-button');
    e = document.querySelector('.navigation');
    t.addEventListener('click', function() {
      return e.classList.toggle('open');
      t.classList.toggle('active');
    }, false);
  }).call(this);

  // Function to handle carousel slide movement
  function moveSlide(n) {
    var slides = document.getElementsByClassName("slides")[0];
    var slideWidth = slides.clientWidth;
    slides.scrollLeft += n * slideWidth;
  }
});
