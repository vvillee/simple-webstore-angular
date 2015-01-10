(function(){
  var app = angular.module('webstore-cart',[]);

  app.controller('CartController', function(){
    this.cartItems = new Array(0);

    this.addProduct = function(product){
      var productIndex = getItemCartIndex(this.cartItems, product);
      if (productIndex===undefined){
        this.cartItems.push({product: product, count: 1});
      } else {
        this.cartItems[productIndex].count++;
      }
    };

    this.removeProduct = function(product){
      var productIndex = getItemCartIndex(this.cartItems, product);
      if (productIndex!==undefined){
        if (this.cartItems[productIndex].count===1){
          this.cartItems.splice(productIndex,1);
        } else {
          this.cartItems[productIndex].count--;
        }
      }
    };

    function getItemCartIndex(cartItems, product){
      for(var i=0; i < cartItems.length; i++){
        if (cartItems[i].product===product){
          return i;
        }
      }
    }
  });

})();