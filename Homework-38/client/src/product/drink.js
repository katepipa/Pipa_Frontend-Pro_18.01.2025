import { Product } from "./product.js";
export class Drink extends Product {
  static SIZE_MODIFIERS = {
    SMALL: { price: 0, calories: 0 },
    LARGE: { price: 1.5, calories: 45 },
  };

  constructor(baseProduct, size) {
    const mod = Drink.SIZE_MODIFIERS[size];
    const finalPrice = baseProduct.price + mod.price;
    const finalCalories = baseProduct.calories + mod.calories;
    super(finalPrice, finalCalories);
    this.size = size;
    this.toppings = [];
  }
}
