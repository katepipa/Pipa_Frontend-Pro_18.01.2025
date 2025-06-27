import "./styles.scss";
import { Burger } from "./product/burger.js";
import { Drink } from "./product/drink.js";
import { PRODUCTS } from "./catalog.js";
import { renderProducts } from "./renderer.js";
import { renderOrders } from "./render-orders.js";
import { myOrders } from "./orders-state.js";

const userOrders = document.getElementById("menu-orders");
const ordersContainer = document.getElementById("container-orders");

/// Render Products ///
renderProducts("burgers", PRODUCTS.burgers);
renderProducts("drinks", PRODUCTS.drinks);
renderProducts("wraps", PRODUCTS.wraps);

/// Block order confirm ///
const modal = document.getElementById("product-modal");
const closeButton = modal.querySelector(".close-button");
const form = document.getElementById("product-form");
const optionsContainer = document.getElementById("options-container");

const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-base-price");
const modalFinalPrice = document.getElementById("modal-final-price");

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
  const button = event.target.closest(".btn-success");
  if (!button) return;

  const id = button.dataset.id;
  const category = button.dataset.category;
  const product = PRODUCTS[category].find((p) => p.id === id);

  openModal(product, category);
});

closeButton.addEventListener("click", () => {
  modal.classList.add("d-none");
});

function openModal(product, category) {
  modal.classList.remove("d-none");
  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalPrice.textContent = product.price.toFixed(2);

  optionsContainer.innerHTML = "";
  const isDrink = category === "drinks";

  if (isDrink) {
    createDrinkOptions();
  } else {
    createBurgerOptions();
  }

  form.onsubmit = (event) => {
    event.preventDefault();

    if (isDrink) {
      const sizeValue = form.querySelector('input[name="size"]:checked').value;
      const drink = new Drink(product, sizeValue);
      drink.image = product.image;
      drink.product = product;
      myOrders.push(drink);
      alert(`Added drink! Price: ${drink.calculatePrice()} EUR`);
    } else {
      const sizeValue = form.querySelector('input[name="size"]:checked').value;
      const stuffingInput = form.querySelector(
        'input[name="stuffing"]:checked'
      );
      const stuffingValue = stuffingInput ? stuffingInput.value : null;
      const burger = new Burger(product, sizeValue, stuffingValue);
      burger.image = product.image;
      burger.product = product;

      form
        .querySelectorAll('input[name="topping"]:checked')
        .forEach((element) => {
          if (element.value === "SPICE") {
            burger.addTopping(Burger.TOPPING_SPICE);
          } else if (element.value === "MAYO") {
            burger.addTopping(Burger.TOPPING_MAYO);
          }
        });
      myOrders.push(burger);
      alert(`Added burger. Price: ${burger.calculatePrice()} EUR`);
    }
    modal.classList.add("d-none");

    /// Send order on Back-End ///

    const buttonSendOrder = optionsContainer.getElementById("btn-send-order");
    buttonSendOrder.addEventListener("click", async () => {
      await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
    });
  };
  addPriceListeners();
  updatePrice();
}

/// Create Options Elements ///

function createDrinkOptions() {
  const label = document.createElement("label");
  label.textContent = "Choose size:";

  const small = createRadio("size", "SMALL", "Small", true);
  const large = createRadio("size", "LARGE", "Large");

  optionsContainer.appendChild(label);
  optionsContainer.appendChild(small);
  optionsContainer.appendChild(large);
}

function createBurgerOptions() {
  const sizeLabel = document.createElement("label");
  sizeLabel.textContent = "Size:";

  const stuffingLabel = document.createElement("label");
  stuffingLabel.classList.add("mt-3");
  stuffingLabel.textContent = "Stuffing:";

  const toppingLabel = document.createElement("label");
  toppingLabel.classList.add("mt-3");
  toppingLabel.textContent = "Toppings:";

  optionsContainer.appendChild(sizeLabel);
  optionsContainer.appendChild(createRadio("size", "SMALL", "Small", true));
  optionsContainer.appendChild(createRadio("size", "LARGE", "Large"));

  optionsContainer.appendChild(stuffingLabel);
  optionsContainer.appendChild(createRadio("stuffing", "CHEESE", "Cheese"));
  optionsContainer.appendChild(createRadio("stuffing", "SALAD", "Salad"));
  optionsContainer.appendChild(createRadio("stuffing", "POTATO", "Potato"));

  optionsContainer.appendChild(toppingLabel);
  optionsContainer.appendChild(createCheckbox("topping", "SPICE", "Spice"));
  optionsContainer.appendChild(createCheckbox("topping", "MAYO", "Mayo"));
}

function createRadio(name, value, labelText, checked = false) {
  const wrapper = document.createElement("div");
  const radio = document.createElement("input");
  const label = document.createElement("label");

  radio.type = "radio";
  radio.name = name;
  radio.value = value;
  if (checked) radio.checked = true;

  label.textContent = labelText;

  wrapper.appendChild(radio);
  wrapper.appendChild(label);
  return wrapper;
}

function createCheckbox(name, value, labelText) {
  const wrapper = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.name = name;
  checkbox.value = value;

  label.textContent = labelText;

  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);
  return wrapper;
}

/// Update Price ///

function updatePrice() {
  const title = modalTitle.textContent;
  let product;
  let category;
  for (const cat of Object.keys(PRODUCTS)) {
    product = PRODUCTS[cat].find((p) => p.name === title);
    if (product) {
      category = cat;
      break;
    }
  }

  if (!product) return;

  const isDrink = category === "drinks";

  if (isDrink) {
    const sizeInput = form.querySelector('input[name="size"]:checked');
    if (!sizeInput) return;

    const size = sizeInput.value;

    const drink = new Drink(product, size);
    modalFinalPrice.textContent = drink.calculatePrice().toFixed(2);
  } else {
    const size = form.querySelector('input[name="size"]:checked')?.value;
    if (!size) return;
    const stuffing =
      form.querySelector('input[name="stuffing"]:checked')?.value || null;

    const burger = new Burger(product, size, stuffing);

    form.querySelectorAll('input[name="topping"]:checked').forEach((el) => {
      if (el.value === "SPICE") burger.addTopping(Burger.TOPPING_SPICE);
      if (el.value === "MAYO") burger.addTopping(Burger.TOPPING_MAYO);
    });

    modalFinalPrice.textContent = burger.calculatePrice().toFixed(2);
  }
}

function addPriceListeners() {
  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", updatePrice);
  });
}

/// Show User's Orders ///

userOrders.addEventListener("click", () => {
  toggleCategory(null);
  ordersContainer.classList.remove("d-none");
  renderOrders();
});
