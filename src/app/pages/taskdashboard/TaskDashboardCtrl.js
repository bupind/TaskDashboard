/**
 * @author vdp
 * created on 2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').controller('TaskDashboardCtrl',function($http,$scope,apiBase,Authorization,$rootScope){
        
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

                if (R.data.success == 1){
                    $scope.listProjectProgress = R.data.message;
//                    $scope.pPUSearch = ""; 
//                    $scope.listProjectProgressFilter = filterFilter($scope.listProjectProgress, {nama_user: $scope.pPUSearch }); // by attribute
                } else
                    $scope.listProjectProgress = [];

            }, function error(R) { console.log(R.statusText); });

        };
        
        $scope.getListProjectProgress();
        
//        $scope.ownerSearch = "";
        
        $scope.myFilterUser = function (list) {
            
            console.log('ownerSearch',$scope.ownerSearch);
            
            if ($scope.ownerSearch != undefined && $scope.ownerSearch != '') {
                var a = $scope.ownerSearch.split(",");
                var b = "";

                for(var i=0; i<a.length; i++){
                    if (i>0)
                        b += " || ";
                    b += "list.nama_user === '" + a[i] + "'";
                }
                console.log('runing',b);
                return eval(b);
            } else {
                return true;
            }
//            return eval("list.nama_user === 'Steven' || list.nama_user === 'dafelina'");
            
        };
        
        $scope.setOwnerSearch = function(a){
            $scope.ownerSearch = a;
        };
        
        $rootScope.setOwnerSearchGlobal = function(a){
            $scope.ownerSearch = a;
            $('.js-tagsinput-owner').tagsinput('add', a);
            $scope.showActionBox = true;
        };
        
        
    });
    
})();