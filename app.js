var mainApp = angular.module("ecommerceApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/product-list.html',
			controller: 'ProductController'
		})
    .when('/cart', {
			templateUrl: 'templates/cart.html',
			controller: 'CartController'
		})
		.when('/checkout', {
        templateUrl: 'templates/checkout.html',
        controller: 'CheckoutController'
      })
	  .when('/thank-you', {
        templateUrl: 'templates/feedback.html',
        controller: 'FeedbackController'
      })
		.otherwise({
			redirectTo: '/'
		});
});
