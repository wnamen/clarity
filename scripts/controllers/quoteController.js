angular.module('clarity')
  .controller('quoteController', quoteController);

quoteController.$inject = ['$http', '$scope'];
function quoteController ($http, $scope){
  var vm = this;
  vm.top = 'aapl,msft,xom,jnj,amzn,fb,brk.b,ge,t,jpm,pg,goog,googl,wfc,vz,pfe,cvx,intc,mrk,ko,bac,cmcsa,v,hd,csco';
  var url = 'http://marketdata.websol.barchart.com/getQuote.jsonp?key=25df1e65da1e4a624c404c83a2f376ec&symbols=';
  var callback = '&callback=JSON_CALLBACK';

  $http({
    method: 'JSONP',
    url: url + vm.top + callback
  }).success(function cb(res){
    vm.data = res.results;
    console.log(vm.data);
  });
}
