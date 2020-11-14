var shopper = {
  firstName: "Jane",
  lastName: "Doe",
  customerID: 12345,
  rewardsMember: true,
  budget: 20.00,
  age: 27,
  groceryCart: ['onion', 'garlic', 'juice', 'butter'],
  buyItem: function(addItem){
    this.groceryCart.push(addItem);
  }
};

shopper.buyItem("onion", 1.00);
shopper.buyItem("garlic", 1.00);
shopper.buyItem("juice", 3.50);
shopper.buyItem("butter", 2.99);
console.log(shopper.firstName + " Your total is $8.49");
console.log(shopper.firstName + " You saved $1.00 with your rewards card!");