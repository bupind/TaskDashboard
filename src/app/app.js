'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]).config(function($provide){
    
//    $provide.value("apiBase", "http://103.76.17.197/api_OrangeScrum/");
    $provide.value("apiBase", "http://192.168.10.137/api_OrangeScrum/");
    $provide.value("Authorization", "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
    
})

.directive('tagInput', function tagInput() {
    return {
        restrict: 'A',
        link: function( $scope, elem, attr) {
          $(elem).tagsinput({
            tagClass:  'label label-' + attr.tagInput
          });
        }
    };
});


;
