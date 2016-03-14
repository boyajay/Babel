angular.module('babel.selection', [])
.controller('SelectionController', function ($location, $scope, $window, Language) {

	$scope.test="TEST";
	while (!$scope.languageChoices) {
		$scope.languageChoices = Language.choices;
    console.log($scope.languageChoices);
  };
	$scope.selectionEntered = function () {
		Language.set($scope.lang1, $scope.lang2);
		$location.path("/translator");
	};

});