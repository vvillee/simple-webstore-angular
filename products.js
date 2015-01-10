(function(){
  var app = angular.module('webstore-products',[]);

  app.controller('WebstoreController', function(){
    this.products = products;
  });

  var products = [
    {
      name: "Suffeli",
      price: "2",
      vat: "24",
      count: 1
    },
    {
      name: "TV-Mix",
      price: "3",
      vat: "24",
      count: 1
    },
    {
      name: "Taffeli",
      price: "4",
      vat: "24",
      count: 1
    },
    {
      name: "Tupla",
      price: "1",
      vat: "24",
      count: 1
    },
    {
      name: "Mars",
      price: "3",
      vat: "24",
      count: 1
    }
  ];

})();