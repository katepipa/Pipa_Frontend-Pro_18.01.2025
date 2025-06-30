import { myOrders } from "./orders-state.js";

export function renderOrders() {
  const ordersList = document.getElementById("orders-list");
  ordersList.innerHTML = "";

  if (myOrders.length === 0) {
    ordersList.innerHTML = '<p class="text-dark">You have no orders yet.</p>';
    return;
  }

  let total = 0;

  myOrders.forEach((order, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";

    const toppings =
      order.toppings?.length > 0
        ? `<p><strong>Toppings:</strong> ${order.toppings
            .map((t) => t.name)
            .join(", ")}</p>`
        : "";

    const price = order.calculatePrice();
    total += price;

    card.innerHTML = `
      <div class="card">
        <img src="${order.image}" class="card-img-top" alt="${
      order.product?.name || order.name
    }" style="max-height: 150px; width: 100%; object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title">${order.product?.name || order.name}</h5>
          <p class="card-text"><strong>Size:</strong> ${order.size}</p>
          ${
            order.stuffing
              ? `<p class="card-text"><strong>Stuffing:</strong> ${order.stuffing}</p>`
              : ""
          }
          ${toppings}
          <p class="card-text"><strong>Price:</strong> ${price.toFixed(
            2
          )} EUR</p>
          <button class="btn btn-danger btn-sm btn-delete-order" data-index="${index}">Delete</button>
        </div>
      </div>
    `;

    ordersList.appendChild(card);
  });

  const totalEl = document.createElement("div");
  totalEl.className = "col-12 mt-4 ";
  totalEl.innerHTML = `
    <div class="alert alert-success">
      <strong>Total:</strong> ${total.toFixed(2)} EUR
    </div>
  `;

  ordersList.appendChild(totalEl);

  document.querySelectorAll(".btn-delete-order").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      myOrders.splice(index, 1);
      renderOrders();
    });
  });
}
