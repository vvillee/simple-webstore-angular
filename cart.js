(function(){
  var app = angular.module('webstore-cart',[]);

  app.controller('CartController', function(){
    this.products = new Array(0);
    this.addProduct = function(product){
      if(this.products.indexOf(product)===-1) {
        this.products.push(product);
      } else {
        product.count++;
      }
    };
    this.removeProduct = function(product){
      if(product.count>1){
        product.count--;
      } else {
        this.products.splice([this.products.indexOf(product)],1);
      }
    };
  });

})();