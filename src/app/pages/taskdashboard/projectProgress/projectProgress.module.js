
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard.projectProgress', []).config(function ($stateProvider) {
        $stateProvider
            .state('taskDashboard.projectProgress', {
                url: '/overdueProject',
                templateUrl: 'app/pages/taskdashboard/projectProgress/projectProgress.html',
                title: 'Progress Bars',
                sidebarMeta: {
                    order: 600,
                },
                controller : 'projectProgressCtrl'
            });
    });    

})();
