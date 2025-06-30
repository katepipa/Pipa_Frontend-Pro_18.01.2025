import { Drink } from "./product/drink.js";
import { Burger } from "./product/burger.js";
import { myOrders } from "./orders-state.js";

export async function processOrder(product, category, form) {
  const isDrink = category === "drinks";
  let order;

  if (isDrink) {
    const sizeValue = form.querySelector('input[name="size"]:checked').value;
    const drink = new Drink(product, sizeValue);
    drink.image = product.image;
    drink.product = product;
    myOrders.push(drink);

    order = {
      type: "drink",
      name: product.name,
      size: sizeValue,
      price: drink.calculatePrice(),
      calories: drink.calculateCalories(),
    };

    alert(`Added drink! Price: ${drink.calculatePrice()} EUR`);
  } else {
    const sizeValue = form.querySelector('input[name="size"]:checked').value;
    const stuffingInput = form.querySelector('input[name="stuffing"]:checked');
    const stuffingValue = stuffingInput ? stuffingInput.value : null;

    const burger = new Burger(product, sizeValue, stuffingValue);
    burger.image = product.image;
    burger.product = product;

    form.querySelectorAll('input[name="topping"]:checked').forEach((el) => {
      if (el.value === "SPICE") burger.addTopping(Burger.TOPPING_SPICE);
      if (el.value === "MAYO") burger.addTopping(Burger.TOPPING_MAYO);
    });

    myOrders.push(burger);

    order = {
      type: "burger",
      name: product.name,
      size: sizeValue,
      stuffing: stuffingValue,
      price: burger.calculatePrice(),
      calories: burger.calculateCalories(),
    };

    alert(`Added burger. Price: ${burger.calculatePrice()} EUR`);
  }

  try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Failed to send order");
    }

    console.log("Order was sent to server!");
  } catch (error) {
    console.error("Error sending order:", error);
  }
}
