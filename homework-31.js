console.log("Choose your hamburger");

class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (value === Hamburger.SIZE_LARGE || value === Hamburger.SIZE_SMALL) {
      this._size = value;
    } else {
      console.log("Invalid size: choose 'SMALL' or 'LARGE'");
    }
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;

    this.toppings.forEach((topping) => (totalPrice += topping.price));

    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;

    this.toppings.forEach((topping) => (totalCalories += topping.calories));

    return totalCalories;
  }
}

let firstHamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);
firstHamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + firstHamburger.calculateCalories());
console.log("Price: " + firstHamburger.calculatePrice());

firstHamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Price with spice: " + firstHamburger.calculatePrice());
