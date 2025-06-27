import { Product } from "./product.js";

export class Burger extends Product {
  static SIZE_MODIFIERS = {
    SMALL: { price: 0, calories: 0 },
    LARGE: { price: 2, calories: 100 },
  };

  static STUFFING_MODIFIERS = {
    CHEESE: { price: 2, calories: 50 },
    SALAD: { price: 1, calories: 5 },
    POTATO: { price: 3, calories: 60 },
  };

  static TOPPING_SPICE = { price: 1, calories: 5 };
  static TOPPING_MAYO = { price: 2, calories: 20 };

  constructor(baseProduct, size, stuffing) {
    const sizeMod = Burger.SIZE_MODIFIERS[size] || { price: 0, calories: 0 };
    const stuffingMod = Burger.STUFFING_MODIFIERS[stuffing] || {
      price: 0,
      calories: 0,
    };

    const totalPrice = baseProduct.price + sizeMod.price + stuffingMod.price;
    const totalCalories =
      baseProduct.calories + sizeMod.calories + stuffingMod.calories;

    super(totalPrice, totalCalories);

    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
