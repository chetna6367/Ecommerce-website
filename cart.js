let cart = JSON.parse(localStorage.getItem("cart")) || [];
let tbody = document.getElementById("cart-body");

function displayCart() {
  tbody.innerHTML = "";

  if (cart.length === 0) {
    tbody.innerHTML =
      "<tr><td colspan='6' style='text-align:center;'>Cart is empty</td></tr>";
    return;
  }

  cart.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>
          <button type="button" class="remove-btn"
            onclick="removeItem(${index})">X</button>
        </td>
        <td><img src="${item.image}" width="70"></td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}"
            onchange="updateQuantity(${index}, this.value)">
        </td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function updateQuantity(index, qty) {
  cart[index].quantity = Number(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
