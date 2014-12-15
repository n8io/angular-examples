(function(){
  'use strict';
  
  angular
    .module('app')
    .controller('Body_Controller', Body_Controller)
    ;

  /* @ngInject */
  function Body_Controller($log, TestService){
    var vm = this;
    
    $log.log('Body_Controller loaded.');
    
    TestService.Get(function onSuccess(results){
      vm.data = results;
    });
  }
})();