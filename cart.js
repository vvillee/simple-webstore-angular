(function(){
  var app = angular.module('webstore-cart',[]);

  app.controller('CartController', function(){
    this.cartItems = new Array(0);

    function getItemCartIndex(cartItems, product){
      for(var i=0; i < cartItems.length; i++){
        if (cartItems[i].product===product){
          return i;
        }
      }
    }

    this.addProduct = function(product){
      var productIndex = getItemCartIndex(this.cartItems, product);
      if (productIndex===undefined){
        this.cartItems.push({product: product, count: 1});
      } else {
        this.cartItems[productIndex].count++;
      }
    };

    this.reduceProduct = function(product){
      var productIndex = getItemCartIndex(this.cartItems, product);
      if (productIndex!==undefined){
        if (this.cartItems[productIndex].count===1){
          this.cartItems.splice(productIndex,1);
        } else {
          this.cartItems[productIndex].count--;
        }
      }
    };

    this.removeProduct = function(product){
      var productIndex = getItemCartIndex(this.cartItems, product);
      if (productIndex!==undefined){
        this.cartItems.splice(productIndex,1);
      }
    };

    this.getTotalSum = function(){
      var totalSum = 0;

      this.cartItems.forEach(function(element){
        totalSum += element.product.price*element.count;
      });

      return totalSum;
    };

    this.getItemTotalSum = function(item){
      return item.product.price * item.count;
    };

    this.getItemTotalSumVat = function(item){
      return (item.product.price/(1+item.product.vat/100)*(item.product.vat/100))*item.count;
    };

    this.makeOrder = function(){
      this.cartItems = new Array(0);
    };

  });

})();