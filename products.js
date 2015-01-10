(function(){
  var app = angular.module('webstore-products',[]);

  app.controller('ProductController', function(){
    this.products = products;
  });

  var products = [
    {
      name: 'Suffeli',
      price: '2',
      vat: '24'
    },
    {
      name: 'TV-Mix',
      price: '3',
      vat: '24'
    },
    {
      name: 'Taffeli',
      price: '4',
      vat: '24'
    },
    {
      name: 'Tupla',
      price: '1',
      vat: '24'
    },
    {
      name: 'Mars',
      price: '3',
      vat: '24'
    }
  ];

})();
