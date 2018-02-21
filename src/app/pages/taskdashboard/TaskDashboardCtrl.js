/**
 * @author vdp
 * created on 2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').controller('TaskDashboardCtrl',function($http,$scope,apiBase,Authorization){
        
        $scope.getListProjectProgress = function(d){
        
            $http({
                method      : "GET",
                url         : apiBase + 'progress_project.php',
                dataType    : 'json',
                headers     : { 
                    'Content-Type'  : 'application/json',
//                    'Authorization' : Authorization
                }
            })
            .then(function success(R) {

                if (R.data.success == 1)
                    $scope.listProjectProgress = R.data.message;
                else
                    $scope.listProjectProgress = [];

            }, function error(R) { console.log(R.statusText); });

        };
        
        $scope.getListProjectProgress();
        
    });
    
})();