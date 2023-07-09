// script.js

// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
let isCartOpen = false; // Add a variable to track the cart state

cartIcon.onclick = () => {
  if (isCartOpen) {
    cart.classList.remove('active'); // Close the cart if it's already open
    isCartOpen = false;
  } else {
    cart.classList.add('active'); // Open the cart if it's closed
    isCartOpen = true;
  }
};

// close cart
closeCart.onclick = () => {
  cart.classList.remove('active');
  isCartOpen = false; // Update the cart state to closed
};

// Function to handle adding products to the cart
function addProductToCart(title, price, productImg) {
  var cartItems = document.querySelector('.cart-content');
  var cartBoxes = cartItems.getElementsByClassName('cart-box');
  var existingItem = null;

  // Check if the item already exists in the cart
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var productId = cartBox.dataset.productId;

    if (productId === title) {
      existingItem = cartBox;
      break;
    }
  }

  if (existingItem) {
    // Increment the quantity of the existing item
    var quantityInput = existingItem.querySelector('.cart-quantity');
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
  } else {
    // Create a new cart item
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    cartShopBox.dataset.productId = title; // Use the product title as the unique identifier

    var cartBoxContent = `
      <img src="${productImg}" alt="" class="cart-img">
      <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity cool">
      </div>
      <i class="fa-solid fa-trash cart-remove"></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;

    var removeButton = cartShopBox.querySelector('.cart-remove');
    var quantityInput = cartShopBox.querySelector('.cart-quantity');

    removeButton.addEventListener('click', removeCartItem);
    quantityInput.addEventListener('change', quantityChanged);

    cartItems.appendChild(cartShopBox);
  }

  updateTotal();
}

// Function to update the total price
function updateTotal() {
  var cartBoxes = document.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.querySelector('.cart-price');
    var quantityElement = cartBox.querySelector('.cart-quantity');
    var priceText = priceElement.innerText.replace('Rp.', '').trim();
    var price = parseFloat(priceText);
    var quantity = parseInt(quantityElement.value);

    console.log('Price:', price, 'Quantity:', quantity); // Log price and quantity

    // Check if the price and quantity are valid numbers
    if (!isNaN(price) && !isNaN(quantity)) {
      total += price * quantity;
    }
  }

  total = Math.round(total * 100) / 100;
  document.querySelector('.total-price').innerText = 'RP.' + total;
}

// Function to handle quantity changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// Function to handle removing items from the cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Function to handle "Add to Cart" button click
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.querySelector('.product-caption').innerText;
  var price = shopProducts.querySelector('.price').innerText;
  var productImg = shopProducts.querySelector('.img-front').src;

  addProductToCart(title, price, productImg);
  updateTotal();

  // Show the cart by adding the "active" class
  cart.classList.add('active');
}

// Function to handle the "Buy Now" button click
function buyButtonClicked() {
  alert('Your order is placed');
  var cartContent = document.querySelector('.cart-content');
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Function to set up event listeners and initialize the script
function ready() {
  var addCartButtons = document.querySelectorAll('.add-cart');
  var buyButton = document.querySelector('.btn-buy');

  addCartButtons.forEach(function (button) {
    button.addEventListener('click', addCartClicked);
  });

  buyButton.addEventListener('click', buyButtonClicked);

  // Call the updateTotal function to initialize the total price
  updateTotal();
}

// Call the ready function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', ready);

//search bar engine
function Search(item) {
  var collection = document.getElementsByClassName("product-box");
  for (i = 0; i < collection.length; i++) {
    var productBox = collection[i];
    var productCaption = productBox.querySelector('.product-caption');
    var displayValue = productCaption.innerText.toLowerCase().includes(item.toLowerCase()) ? "block" : "none";
    productBox.style.display = displayValue;
  }
}


// var mySelector = document.querySelectorAll("#searchBar");
//   mySelector.forEach(function toggles(param){
//     param.addEventListener("keyup", ()=>{
//       param.classList.toggles("product-box")
//     })
//   })