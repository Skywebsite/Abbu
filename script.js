document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      const name = this.getAttribute('data-name');
      const price = parseFloat(this.getAttribute('data-price'));

      addToCart(id, name, price);
    });
  });

  function addToCart(id, name, price) {
    // Create cart item HTML
    const cartItemHtml = `
      <div class="cart-item">
        <span>${name}</span>
        <span>$${price.toFixed(2)}</span>
      </div>
    `;

    // Append cart item to cart container
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML += cartItemHtml;
  }
});
