angular.module('babel', [
  'babel.translator',
  'babel.selection',
  'ngRoute',
  'LanguageFactory'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/translator', {
    templateUrl: 'app/translator/translator.html',
    controller: 'TranslatorController'
  })
  .when('/selection', {
    templateUrl: 'app/selection/selection.html',
    controller: 'SelectionController'
  })
  .otherwise({
    redirectTo: '/selection'
  });
})