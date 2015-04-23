angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  $scope.data={};
  $scope.getLinks = function(){
    Links.getLinks().then(function(theLinks){
      $scope.data.links=theLinks;
    });
  }
  $scope.testArray = ["test","test2","test3"];
  $scope.returnArray=function(){
    return $scope.testArray;
  };
  $scope.getLinks();
});
// .run($scope.getLinks());
