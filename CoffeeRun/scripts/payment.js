(function(window) {
  "use strict";
  var App = window.App || {};

  function Payment(db) {
    this.db = db;
  }

  Payment.prototype.createPayment = function(order) {
    console.log("Paying order for " + order.usermail);
    this.db.add(order.usermail, order);
  };

  Payment.prototype.printPayment = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Payment has pending orders:");
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Payment = Payment;
  window.App = App;
})(window);
