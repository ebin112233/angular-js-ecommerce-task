angular.module('ecommerceApp')
  .service('ProductService', ['$http', function($http) {
    this.getAllProducts = function() {
      return $http.get('products.json')
        .then(function(response) {
          return response.data;
        });
    };
  }]);