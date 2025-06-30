import { Burger } from "./product/burger";
import { Drink } from "./product/drink";

export function openModal(product, category, domRefs) {
  const {
    modal,
    modalTitle,
    modalImage,
    modalPrice,
    modalFinalPrice,
    modalCalories,
    modalFinalCalories,
    optionsContainer,
    form,
  } = domRefs;

  modal.classList.remove("d-none");
  modalTitle.textContent = product.name;
  modalImage.src = product.image;
  modalPrice.textContent = product.price.toFixed(2);
  modalCalories.textContent = product.calories;

  optionsContainer.innerHTML = "";
  const isDrink = category === "drinks";

  if (isDrink) {
    createDrinkOptions(optionsContainer);
  } else {
    createBurgerOptions(optionsContainer);
  }

  addPriceListeners(
    form,
    product,
    category,
    modalFinalPrice,
    modalFinalCalories
  );
  updatePrice(form, product, category, modalFinalPrice, modalFinalCalories);
}

/// Create Options Elements ///

function createDrinkOptions(container) {
  const label = document.createElement("label");
  label.textContent = "Choose size:";

  const small = createRadio("size", "SMALL", "Small", true);
  const large = createRadio("size", "LARGE", "Large");

  container.appendChild(label);
  container.appendChild(small);
  container.appendChild(large);
}

function createBurgerOptions(container) {
  const sizeLabel = document.createElement("label");
  sizeLabel.textContent = "Size:";

  const stuffingLabel = document.createElement("label");
  stuffingLabel.classList.add("mt-3");
  stuffingLabel.textContent = "Stuffing:";

  const toppingLabel = document.createElement("label");
  toppingLabel.classList.add("mt-3");
  toppingLabel.textContent = "Toppings:";

  container.appendChild(sizeLabel);
  container.appendChild(createRadio("size", "SMALL", "Small", true));
  container.appendChild(createRadio("size", "LARGE", "Large"));

  container.appendChild(stuffingLabel);
  container.appendChild(createRadio("stuffing", "CHEESE", "Cheese"));
  container.appendChild(createRadio("stuffing", "SALAD", "Salad"));
  container.appendChild(createRadio("stuffing", "POTATO", "Potato"));

  container.appendChild(toppingLabel);
  container.appendChild(createCheckbox("topping", "SPICE", "Spice"));
  container.appendChild(createCheckbox("topping", "MAYO", "Mayo"));
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

function updatePrice(
  form,
  product,
  category,
  modalFinalPrice,
  modalFinalCalories
) {
  const isDrink = category === "drinks";

  if (isDrink) {
    const sizeInput = form.querySelector('input[name="size"]:checked');
    if (!sizeInput) return;

    const size = sizeInput.value;
    const drink = new Drink(product, size);
    modalFinalPrice.textContent = drink.calculatePrice().toFixed(2);
    modalFinalCalories.textContent = drink.calculateCalories();
  } else {
    const size = form.querySelector('input[name="size"]:checked')?.value;
    if (!size) return;
    const stuffing =
      form.querySelector('input[name="stuffing"]:checked')?.value || null;

    const burger = new Burger(product, size, stuffing);

    form
      .querySelectorAll('input[name="topping"]:checked')
      .forEach((element) => {
        if (element.value === "SPICE") burger.addTopping(Burger.TOPPING_SPICE);
        if (element.value === "MAYO") burger.addTopping(Burger.TOPPING_MAYO);
      });

    modalFinalPrice.textContent = burger.calculatePrice().toFixed(2);
    modalFinalCalories.textContent = burger.calculateCalories();
  }
}

function addPriceListeners(
  form,
  product,
  category,
  modalFinalPrice,
  modalFinalCalories
) {
  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      updatePrice(form, product, category, modalFinalPrice, modalFinalCalories);
    });
  });
}
