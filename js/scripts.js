function Pizza(pizza, size, crust, topping,amount) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.amount = amount;
  
  }
  
  var priceSize, priceCrust, priceTopping,pizzaAmount;
  var displayOrdersModal = new bootstrap.Modal(document.getElementById('displayOrdersModal'));
  var checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));

  
// sourcing the topping price section
Pizza.prototype.getToppingPrice = function () {
    switch (this.size) {
        case "large":
        return 200;
      case "medium":
        return 150;
      case "small":
        return 100;
      default:
                        return null;
  }
  };
  // crust section
  Pizza.prototype.getCrustPrice = function () {
    if (this.crust === "crispy") {
      return 100;
    } else if (this.crust === "stuffed") {
      return 200;
    } else if (this.crust === "glutten-free") {
      return 150;
    }
    else {
      return 0;
    }
  };