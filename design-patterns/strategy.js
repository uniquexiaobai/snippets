/*
 * 策略模式：就是能够把一系列“可互换的”算法封装起来，并根据用户需求来选择其中一种
 */

function ShoppingCart(discount, amount) {
  this.discount = discount;
  this.amount = amount;
}

ShoppingCart.prototype.checkout = function () {
  return this.discount(this.amount);
};

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

var guestCart = new ShoppingCart(guestStrategy, 100);
console.log(guestCart.checkout()); // 100

var regularCart = new ShoppingCart(guestStrategy, 100);
console.log(regularCart.checkout()); // 90

var premiumCart = new ShoppingCart(guestStrategy, 100);
console.log(premiumCart.checkout()); // 80
