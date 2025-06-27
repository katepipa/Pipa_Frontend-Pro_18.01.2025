export class Product {
  constructor(basePrice = 0, baseCalories = 0) {
    this.basePrice = basePrice;
    this.baseCalories = baseCalories;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    return (
      this.basePrice +
      this.toppings.reduce((sum, topping) => sum + topping.price, 0)
    );
  }

  calculateCalories() {
    return (
      this.baseCalories +
      this.toppings.reduce((sum, topping) => sum + topping.calories, 0)
    );
  }
}
