angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, ShortenLinks, Links) {
  // Your code here
  $scope.link={};
  $scope.addLink = function(){
    ShortenLinks.addLink();
  };
});
