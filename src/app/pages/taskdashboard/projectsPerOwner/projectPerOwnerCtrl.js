/**
 * @author vdp
 * created on 2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').controller('projectsPerOwnerCtrl',function ($scope, baConfig, colorHelper,$http,apiBase) {
        
        $scope.transparent = baConfig.theme.blur;
        var dashboardColors = baConfig.colors.dashboard;
        
        $scope.getTotalProject = function(d){
        
            $http({
                method      : "GET",
                url         : apiBase + 'total_project.php',
                dataType    : 'json',
                headers     : { 
                    'Content-Type'  : 'application/json',
//                    'Authorization' : Authorization
                }
            })
            .then(function success(R) {
                
                $scope.doughnutData = { 
                    labels : [],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: [
                                dashboardColors.white,
                                dashboardColors.blueStone,
                                dashboardColors.surfieGreen,
                                dashboardColors.silverTree,
                                dashboardColors.gossip,
                                dashboardColors.white,
                                dashboardColors.blueStone,
                                dashboardColors.surfieGreen,
                                dashboardColors.silverTree,
                                dashboardColors.gossip,
                                dashboardColors.white,
                                dashboardColors.blueStone,
                                dashboardColors.surfieGreen,
                                dashboardColors.silverTree,
                                dashboardColors.gossip,
                                dashboardColors.white,
                                dashboardColors.blueStone,
                                dashboardColors.surfieGreen,
                                dashboardColors.silverTree,
                                dashboardColors.gossip,
                                dashboardColors.white,
                                dashboardColors.blueStone,
                                dashboardColors.surfieGreen,
                                dashboardColors.silverTree,
                                dashboardColors.gossip,
                            ],
                            hoverBackgroundColor: [
                                colorHelper.shade(dashboardColors.white, 15),
                                colorHelper.shade(dashboardColors.blueStone, 15),
                                colorHelper.shade(dashboardColors.surfieGreen, 15),
                                colorHelper.shade(dashboardColors.silverTree, 15),
                                colorHelper.shade(dashboardColors.gossip, 15),
                                colorHelper.shade(dashboardColors.white, 15),
                                colorHelper.shade(dashboardColors.blueStone, 15),
                                colorHelper.shade(dashboardColors.surfieGreen, 15),
                                colorHelper.shade(dashboardColors.silverTree, 15),
                                colorHelper.shade(dashboardColors.gossip, 15),
                                colorHelper.shade(dashboardColors.white, 15),
                                colorHelper.shade(dashboardColors.blueStone, 15),
                                colorHelper.shade(dashboardColors.surfieGreen, 15),
                                colorHelper.shade(dashboardColors.silverTree, 15),
                                colorHelper.shade(dashboardColors.gossip, 15),
                                colorHelper.shade(dashboardColors.white, 15),
                                colorHelper.shade(dashboardColors.blueStone, 15),
                                colorHelper.shade(dashboardColors.surfieGreen, 15),
                                colorHelper.shade(dashboardColors.silverTree, 15),
                                colorHelper.shade(dashboardColors.gossip, 15),
                                colorHelper.shade(dashboardColors.white, 15),
                                colorHelper.shade(dashboardColors.blueStone, 15),
                                colorHelper.shade(dashboardColors.surfieGreen, 15),
                                colorHelper.shade(dashboardColors.silverTree, 15),
                                colorHelper.shade(dashboardColors.gossip, 15),
                            ],
                            percentage: [],
                            project_done : [],
                            total_project : []
                        }
                    ]
                }
                
                if (R.data.success == 1){
                    $scope.totalProject = R.data.message;
                    $scope.countTotalProject = 0;
                    $scope.countTotalProjectDone = 0;
                    for (var i=0; i < $scope.totalProject.length; i++) {
                        $scope.countTotalProject = $scope.countTotalProject + parseInt($scope.totalProject[i]['total_project']);
                        $scope.countTotalProjectDone = $scope.countTotalProjectDone + parseInt($scope.totalProject[i]['project_done']);
                        $scope.doughnutData.labels.push($scope.totalProject[i]['nama_project']);
                        $scope.doughnutData.datasets[0].data.push($scope.totalProject[i]['total_project']);
                        $scope.doughnutData.datasets[0].percentage.push(parseInt($scope.totalProject[i]['project_done']) / parseInt($scope.totalProject[i]['total_project']) * 100);
                        $scope.doughnutData.datasets[0].project_done.push($scope.totalProject[i]['project_done']);
                        $scope.doughnutData.datasets[0].total_project.push($scope.totalProject[i]['total_project']);
                    }
                    $scope.loadDoughnut();
                } else
                    $scope.totalProject = [];

            }, function error(R) { console.log(R.statusText); });

        };
        
        $scope.getTotalProject();
        
        $scope.loadDoughnut = function(){
            var ctx = document.getElementById('chart-area').getContext('2d');
            window.myDoughnut = new Chart(ctx, {
                type: 'doughnut',
                data: $scope.doughnutData,
                options: {
                    cutoutPercentage: 64,
                    responsive: true,
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    }
                }
            });
        };

        
    });
    
})();