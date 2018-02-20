/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').directive('overdueProject', function() {
        return {
            restrict: 'E',
            controller: 'overdueProjectCtrl',
            templateUrl: 'app/pages/taskdashboard/overdueProject/overdueProject.html'
        };
    });
  
})();