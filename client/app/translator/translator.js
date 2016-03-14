angular.module('babel.translator', [])
.controller('TranslatorController', function ($scope, $window, Language) {
  $scope.lang1 = Language.selectedLanguages.lang1.name;
  $scope.lang2 = Language.selectedLanguages.lang2.name;    
});