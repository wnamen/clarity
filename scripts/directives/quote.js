angular.module('clarity')
  .directive('quoteView', quoteView);


function quoteView(){
  var directive = {
    restrict: 'E',
    scope: {
      symbols: '@'
    },
    replace: true,
    templateUrl: '../../templates/quote.html'
  }

  return directive;
}
