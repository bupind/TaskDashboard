
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').directive('projectsPerOwner', function() {
        return {
          restrict: 'E',
          controller: 'projectsPerOwnerCtrl',
          templateUrl: 'app/pages/taskdashboard/projectsPerOwner/projectsPerOwner.html'
        };
    });
  
})();