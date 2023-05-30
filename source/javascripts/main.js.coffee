document.addEventListener 'DOMContentLoaded', ->

  # Get the search input element
  searchInput = document.querySelector '#search-input'

  # Get all the product elements
  products = document.querySelectorAll '.product'

  # Function to handle search
  handleSearch = -> 
    searchTerm = searchInput.value.toLowerCase()

    products.forEach (product) ->
      title = product.querySelector('.title').textContent.toLowerCase()

      if title.includes(searchTerm)
        product.style.display = 'block'
      else
        product.style.display = 'none'

  # Attach event listener to search input
  searchInput.addEventListener 'input', handleSearch

  # Get the navigation button element
  navButton = document.querySelector '.nav-button'

  # Get the navigation element
  navigation = document.querySelector '.navigation'

  # Listen for click event
  navButton.addEventListener 'click', (->

    # Open navigation and change toggle button
    navigation.classList.toggle 'open'
    navButton.classList.toggle 'active'
  ), false
