let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeItem(${index})">Remove</button>`;
    cartContainer.appendChild(div);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function processOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("Order processed successfully!");
  clearCart();
}

function subscribe() {
  const email = document.getElementById("subscribeEmail").value;
  if (email) {
    alert(`Subscribed with email: ${email}`);
    document.getElementById("subscribeEmail").value = "";
  } else {
    alert("Please enter an email to subscribe.");
  }
}

function submitForm(event) {
  event.preventDefault();
  alert("Form submitted. Thank you!");
  event.target.reset();
}

// Custom Order functions
function showCustomOrderForm() {
  const form = document.getElementById("custom-order");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function addCustomOrder() {
  const name = document.getElementById("custom-name").value.trim();
  const price = parseFloat(document.getElementById("custom-price").value);

  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter a valid name and price.");
    return;
  }

  addToCart(name, price);
  document.getElementById("custom-name").value = "";
  document.getElementById("custom-price").value = "";
  document.getElementById("custom-order").style.display = "none";
}
