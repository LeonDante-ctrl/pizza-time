function Pizza(pizza, size, crust, topping,amount) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.amount = amount;
  
  }
  
  var priceSize, priceCrust, priceTopping,pizzaAmount;
  var displayOrdersModal = new bootstrap.Modal(document.getElementById('displayOrdersModal'))
  var checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  
  
