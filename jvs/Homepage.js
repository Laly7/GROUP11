// Dynamically change the text when hovering over each image
const imageItems = document.querySelectorAll('.image-item');

imageItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const price = item.getAttribute('data-price');
    const location = item.getAttribute('data-location');
    
    // Get the price and location p elements
    const priceElement = item.querySelector('.price');
    const locationElement = document.getElementById('flight-location');  // Assuming you have a place to display the location info
  });
});