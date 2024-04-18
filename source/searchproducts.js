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

});
