(function(){
  'use strict';
  
  angular
    .module('app')
    .controller('Body_Controller', Body_Controller)
    ;

  /* @ngInject */
  function Body_Controller($log){
    var vm = this;
    
    $log.log('Body_Controller loaded.');
  }
})();