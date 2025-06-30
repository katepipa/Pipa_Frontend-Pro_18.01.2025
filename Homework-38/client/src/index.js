import "./styles.scss";
import { PRODUCTS } from "./catalog.js";
import { renderProducts } from "./renderer.js";
import { renderOrders } from "./render-orders.js";
import { openModal } from "./modal.js";
import { processOrder } from "./order-service.js";

const userOrders = document.getElementById("menu-orders");
const ordersContainer = document.getElementById("container-orders");

/// Render Products ///

renderProducts("burgers", PRODUCTS.burgers);
renderProducts("drinks", PRODUCTS.drinks);
renderProducts("wraps", PRODUCTS.wraps);

/// Modal order confirm ///
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-base-price");
const modalFinalPrice = document.getElementById("modal-final-price");
const modalCalories = document.getElementById("modal-base-calories");
const modalFinalCalories = document.getElementById("modal-final-calories");
const optionsContainer = document.getElementById("options-container");
const form = document.getElementById("product-form");

/// Show products ///

document.getElementById("menu-burgers").addEventListener("click", () => {
  toggleCategory("burgers");
});
document.getElementById("menu-drinks").addEventListener("click", () => {
  toggleCategory("drinks");
});
document.getElementById("menu-wraps").addEventListener("click", () => {
  toggleCategory("wraps");
});

function toggleCategory(idToShow) {
  ordersContainer.classList.add("d-none");

  ["burgers", "wraps", "drinks"].forEach((id) => {
    const el = document.getElementById(id);
    if (id === idToShow) {
      el.classList.remove("d-none");
    } else {
      el.classList.add("d-none");
    }
  });
}

/// Show Modal Order Confirmation ///

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id][data-category]");
  if (!button || !button.dataset.category || !button.dataset.id) return;

  const id = button.dataset.id;
  const category = button.dataset.category;

  if (!category || !PRODUCTS[category]) {
    console.error(`Category: ${category} does not exist in PRODUCTS`);
    return;
  }

  const product = PRODUCTS[category].find((product) => product.id === id);
  if (!product) {
    console.error(
      `Product with ID ${id} was not found in category ${category}`
    );
    return;
  }

  openModal(product, category, {
    modal,
    modalTitle,
    modalImage,
    modalPrice,
    modalFinalPrice,
    modalCalories,
    modalFinalCalories,
    optionsContainer,
    form,
  });
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
  modal.classList.add("d-none");
});

/// Show User's Orders ///

userOrders.addEventListener("click", () => {
  toggleCategory(null);
  ordersContainer.classList.remove("d-none");
  renderOrders();
});

form.onsubmit = async (event) => {
  event.preventDefault();
  const title = modalTitle.textContent;

  let product, category;
  for (const cat of Object.keys(PRODUCTS)) {
    product = PRODUCTS[cat].find((p) => p.name === title);
    if (product) {
      category = cat;
      break;
    }
  }

  if (!product || !category) return;

  await processOrder(product, category, form);
  modal.classList.add("d-none");
};
