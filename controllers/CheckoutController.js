// CheckoutController.js
angular.module('ecommerceApp')
  .controller('CheckoutController', ['$scope', '$location', 'CartService', function($scope,$location,CartService) {
    $scope.cartItems = CartService.getCartItems();

    $scope.processCheckout = function() {
      // We can implement checkout process here, such as sending the order details to a server,
      // handling the payment, etc. For this example, we'll simply clear the cart and redirect
      // the user to the thank you page.
      
      // Assuming we have a function to handle the order processing on the server-side
      // and the server responds with a success message.

      // Clear the cart after successful checkout
      CartService.clearCart();

      // Redirect the user to the thank you page
      $location.path('/thank-you');
    };
  }]);
