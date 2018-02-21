/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').controller('overdueProjectCtrl', function($scope, $timeout, baConfig, baUtil,$http,apiBase) {
        
        $scope.getListOverdueProject = function(d){
        
            $http({
                method      : "GET",
                url         : apiBase + 'late_project.php',
                dataType    : 'json',
                headers     : { 
                    'Content-Type'  : 'application/json',
//                    'Authorization' : Authorization
                }
            })
            .then(function success(R) {

                if (R.data.success == 1)
                    $scope.listOverdueProject = R.data.message;
                else
                    $scope.listOverdueProject = [];
                
                $scope.charts = [];
                var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
                $scope.countLateDate = 0;
                for (var i=0; i<$scope.listOverdueProject.length; i++){
                    $scope.countLateDate = $scope.countLateDate + parseInt($scope.listOverdueProject[i].hari_telat);
                    $scope.charts[i] = {
                        color       : pieColor,
                        description : $scope.listOverdueProject[i].nama_project,
                        stats       : $scope.listOverdueProject[i].inisial_project,
                        icon        : '',
                        late_date   : $scope.listOverdueProject[i].hari_telat
                    };
                }

            }, function error(R) { console.log(R.statusText); });

        };
        
        $scope.getListOverdueProject();
        
        $scope.$watch('charts',function(newValue){
            if (newValue) {
                

                function getRandomArbitrary(min, max) {
                    return 90;
                }

                function loadPieCharts() {
                    $('.chart').each(function () {
                      var chart = $(this);
                      chart.easyPieChart({
                        easing: 'easeOutBounce',
                        onStep: function (from, to, percent) {
//                          $(this.el).find('.percent').text(Math.round(percent));
                        },
                        barColor: chart.attr('rel'),
                        trackColor: 'rgba(0,0,0,0)',
                        size: 84,
                        scaleLength: 0,
                        animation: 2000,
                        lineWidth: 9,
                        lineCap: 'round',
                      });
                    });

                    $('.refresh-data').on('click', function () {
                        updatePieCharts();
                    });
                }

                function updatePieCharts() {
                    $('.pie-charts .chart').each(function(index, chart) {
//                        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
                    });
                }

                $timeout(function () {
                    loadPieCharts();
                    updatePieCharts();
                }, 1000);
            }
        });
        
        
    });

  
})();