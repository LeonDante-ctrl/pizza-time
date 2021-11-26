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
  // pizza size time
  Pizza.prototype.getPizzaSizePrice = function () {
    switch (this.size) {
    
      case "large":
        return 1200;
      case "medium":
        return 1000;
      case "small":
        return 800;
      default:
                
          return null;
  }
  };
  //pizza total
  Pizza.prototype.getPizzaPrice = function () {
    return (this.getCrustPrice() + this.getToppingPrice() + this.getPizzaSizePrice())* this.amount;
 };
 
 
 Pizza.prototype.getPizzaPrice = function () {
    return (this.getCrustPrice() + this.getToppingPrice() + this.getPizzaSizePrice())* this.amount;
 };
 
 
 var resetForm = () =>{
   $("#pizzaCategory ").val('');
   $("#pizzaOption ").val('...');
   $("#pizzaSize ").val('');
   $("#crust ").val('');
   $("#topping ").val('');
   $("#amount").val( '');
 };
 $(document).ready(function() {
      $(function($) {
        var Options = {
            'meatarian': ['...','Pesto','Artichoke','Steakhouse pizza','Club pizza','chicken pizza' , 'Buffalo beef pizza','Chilli pizza','Meat lovers pizza'],
            'vegetarian': ['...','spinach Pizza','Grilled Tomato Pizza',' Mushroom Pizza','Garlic Pizza','Mushroom Pizza','Pepper Pizza','Kale pizza'],
              };
    
        var $Options = $('#pizzaOption');
        $('#pizzaCategory').change(function () {
            var pizzaCategory = $(this).val(), pizzas = Options[pizzaCategory] || [];
    
            var html = $.map(pizzas, function(pizza){
                return '<option value="' + pizza + '">' + pizza + '</option>';
            }).join('');
            $Options.html(html);
        });
    });