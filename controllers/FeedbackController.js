// ThankYouController.js
angular.module('ecommerceApp')
  .controller('FeedbackController', ['$scope','$location',function($scope,$location) {
    $scope.stars = [{ filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }];
    $scope.feedbackText = '';

    $scope.toggleStar = function(index) {
      for (var i = 0; i <= index; i++) {
        $scope.stars[i].filled = true;
      }
      for (var j = index + 1; j < $scope.stars.length; j++) {
        $scope.stars[j].filled = false;
      }
    };

    $scope.submitFeedback = function() {
        alert('Thank you for your feedback');
      $location.path('/');
    };
  }]);
