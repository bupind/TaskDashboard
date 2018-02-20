/**
 * @author vdp
 * created on 2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard', []).config(function($stateProvider) {
        $stateProvider
            .state('taskdashboard', {
                url         : '/taskDashboard',
                templateUrl : 'app/pages/taskdashboard/task_dashboard.html',
                title       : 'Task Dashboard',
                sidebarMeta : {
                      icon  : 'ion-android-home',
                      order : 2,
                },
                controller  : 'TaskDashboardCtrl'
            });
    });
  
})();
