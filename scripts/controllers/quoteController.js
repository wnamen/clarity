angular.module('clarity')
  .controller('quoteController', quoteController);

quoteController.$inject = ['$http', '$scope'];
function quoteController ($http, $scope){
  var vm = this;
  vm.topQuotes = ['aapl','msft','xom','jnj','amzn','fb','brk.b','ge','t','jpm','pg','goog','googl','wfc','vz','pfe','cvx','intc','mrk','ko','bac','cmcsa','v','hd','csco'];
  var url = 'http://marketdata.websol.barchart.com/getQuote.jsonp?key=25df1e65da1e4a624c404c83a2f376ec&mode=R&symbols=';
  var callback = '&callback=JSON_CALLBACK';

  $http({
    method: 'JSONP',
    url: url + vm.topQuotes + callback
  }).success(function cb(res){
    vm.data = res.results;
    console.log(vm.data);
  });

  $scope.$watch('search', function() {
    vm.search = $scope.search;
    searchQuote();
  });

  function searchQuote(){
    $http({
      method: 'JSONP',
      url: url + vm.search + callback
    }).success(function cb(res){

      vm.data = res.results;
      console.log(vm.data);
    });
  }

  $scope.colorIndicator = function (val){

    var positiveColor = "color: green";
    var negativeColor = "color: red";

    console.log();

    if (val > 0){
      return positiveColor;
    } else {
      return negativeColor;
    }
  }

  $scope.arrowIndicator = function (val) {
    var positiveArrow = "../../images/upArrow.jpg";
    var negativeArrow = "../../images/downArrow.jpg";

    if (val > 0) {
      return positiveArrow;
    } else {
      return negativeArrow;
    }
  }

  $scope.pricingIndicator = function (val, key){

    var positivePricing = "color: green";
    var negativePricing = "color: red";

    console.log();

    if (val > key){
      return positivePricing;
    } else {
      return negativePricing;
    }
  }
}
