/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').directive('taskdashboardPieChart', function() {
        return {
            restrict: 'E',
            controller: 'TaskDashboardPieChartCtrl',
            templateUrl: 'app/pages/taskdashboard/dashboardPieChart/dashboardPieChart.html'
        };
    });
  
})();