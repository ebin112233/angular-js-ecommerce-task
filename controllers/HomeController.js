// ProductController.js
angular.module('ecommerceApp')
  .controller('HomeController', ['$scope','CartService', function($scope,CartService) {
    $scope.products = {};
    $scope.cartCount = CartService.getCartCount();
    $scope.$watch(function(){
       return CartService.getCartCount()
    },function(newCount){
        $scope.cartCount=newCount;
    })
  }]);
