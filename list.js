angular.module('optionApp', [])
  .controller('OptionsController', ['$scope', function($scope) {
    $scope.options = [];
	$scope.decissionMade = false;

    $scope.addOption = function() {
      $scope.options.push({text:$scope.optionText});
      $scope.optionText = '';
    };

    $scope.removeOption = function( index ) {
      $scope.options.splice(index, 1);
    };

    $scope.chooseOption = function() {
    	$scope.chosenOption = $scope.options[Math.floor((Math.random()*$scope.options.length))];
    	$scope.decissionMade = true
    }
  }]);