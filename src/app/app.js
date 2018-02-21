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
    
    $provide.value("apiBase", "http://103.76.17.197/api_OrangeScrum/");
    $provide.value("Authorization", "Basic dXNlcm5hbWU6cGFzc3dvcmQ=");
    
});