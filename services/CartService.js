// CartService.js
angular.module('ecommerceApp')
  .service('CartService', function() {
    var cartItems = [];

    this.addToCart = function(product) {
      var existingProduct = cartItems.find(function(item) {
        return item.id === product.id;
      });

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        var cartItem = angular.copy(product);
        cartItem.quantity = 1;
        cartItems.push(cartItem);
      }
    };

    this.removeFromCart = function(productId) {
      cartItems = cartItems.filter(function(item) {
        return item.id !== productId;
      });
    };

    this.incrementQuantity = function(productId) {
      var cartItem = cartItems.find(function(item) {
        return item.id === productId;
      });
      if (cartItem) {
        cartItem.quantity += 1;
      }
    };

    this.decrementQuantity = function(productId) {
      var cartItem = cartItems.find(function(item) {
        return item.id === productId;
      });
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          this.removeFromCart(productId);
        }
      }
    };

    this.getCartItems = function() {
      return cartItems;
    };
    this.clearCart = function() {
      cartItems=[];
    };
    this.getCartCount=function(){
      return cartItems.length;
    }
  });
