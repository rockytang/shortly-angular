angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  $scope.data={};
  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(theLinks){
      $scope.data.links=theLinks;
    })
    .catch(function(error){
      console.log(error)
    });
  }

  $scope.getLinks();
});
