// ProductController.js
angular.module('ecommerceApp')
  .controller('ProductController', ['$scope', 'ProductService','CartService', function($scope, ProductService,CartService) {
    $scope.products = {};
    $scope.cartItems = CartService.getCartItems();

    ProductService.getAllProducts().then(function(data) {
      $scope.products = data;
    });
    $scope.addToCart = function(product) {
      CartService.addToCart(product);
      $scope.cartItems = CartService.getCartItems(); // Update cartItems after adding to the cart
    };
  }]);
