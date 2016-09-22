angular.module('clarity')
  .directive('quote', quote);


function quote(){
  var directive = {
    restrict: 'E',
    scope: {
      symbols: '@'
    },
    replace: true,
    templateUrl: '../../templates/quote.html',
    controller: quoteController,
    controllerAs: 'quoteCtrl'
  }

  return directive;
}
