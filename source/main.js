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

  // Get the navigation button element
  const nav_button = document.querySelector('.nav-button');
  const navigation = document.querySelector('.navigation');

  // Listen for click event
  nav_button.addEventListener('click', function() {
    // Open navigation and change toggle button
    navigation.classList.toggle('open');
    nav_button.classList.toggle('active');
  });
});
