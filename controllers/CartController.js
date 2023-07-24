// CartController.js
angular.module('ecommerceApp')
  .controller('CartController', ['$scope', 'CartService','$location', function($scope, CartService,$location) {
    $scope.cartItems = CartService.getCartItems();
    
    $scope.removeFromCart = function(productId) {
      CartService.removeFromCart(productId);
      $scope.cartItems = CartService.getCartItems();
    };

    $scope.incrementQuantity = function(productId) {
      CartService.incrementQuantity(productId);
    };

    $scope.decrementQuantity = function(productId) {
      CartService.decrementQuantity(productId);
    };
    $scope.getTotal = function() {
      var total = 0;
      angular.forEach($scope.cartItems, function(item) {
        total += item.price * item.quantity;
      });
      return total;
    };

     $scope.checkout = function() {
      $location.path('/checkout');
    };
  }]);
