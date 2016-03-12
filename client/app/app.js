angular.module('babel', [
  'babel.translator',
  'babel.selection',
  'ngRoute',
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/translator', {
    templateUrl: 'app/translator/translator.html',
    controller: 'TranslatorController'
  })
  .otherwise({
    redirectTo: '/translator'
  });
})