angular.module('clarity')
  .directive('stockQuote' stockQuote);

function stockQuote(){
  var directive = {
    restrict: 'E',
    scope: {
      symbols: '@'
    }
    replace: true,
    templateUrl: '../../templates/stockQuote.html',
    controllerAs: 'stockQuoteCtrl',
    controller: stockQuoteController
  }

  stockQuoteController.$inject = ['$http', '$scope'];
  function stockQuoteController($http, $scope){
    var vm = this;
    var url = 'http://marketdata.websol.barchart.com/getQuote.json?key=25df1e65da1e4a624c404c83a2f376ec&';

    vm.getQuote = function(symbols){
      console.log(url + symbols);

      $http({
        method: 'GET',
        url: url + symbols
      }).then(renderQuote, onError);

      function renderQuote(res){
        vm.quote = res.data;
      }

      function onError(res) {
        console.log(res);
      }
    }
  }
}
