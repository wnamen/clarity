angular.module('clarity', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/quote.html',
      controllerAs: 'quoteCtrl',
      controller: 'quoteController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
