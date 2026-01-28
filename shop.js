function addToCart(id, name, price, image) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let index = cart.findIndex(item => item.id === id);

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}


function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

updateCartCount();
