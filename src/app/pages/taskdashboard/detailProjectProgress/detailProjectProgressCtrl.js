/**
 * @author vdp
 * created on 2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.taskdashboard').controller('detailProjectProgressCtrl', function($scope,$http,apiBase,$stateParams){
        
        $scope.showCommentBtn = function(a){
            if (angular.element( document.querySelector( '.showComment_'+a ) ).hasClass('hide')){
                angular.element( document.querySelector( '.showComment_'+a ) ).removeClass('hide');
                angular.element( document.querySelector( '.showComment_hr_'+a ) ).removeClass('hide');
            } else {
                angular.element( document.querySelector( '.showComment_'+a ) ).addClass('hide');
                angular.element( document.querySelector( '.showComment_hr_'+a ) ).addClass('hide');
            }
        };
        
        $scope.getListProjectProgress = function(d){
        
            $http({
                method      : "GET",
                url         : apiBase + 'progress_project_detail.php?project_id='+d['id'],
                dataType    : 'json',
                headers     : { 
                    'Content-Type'  : 'application/json',
//                    'Authorization' : Authorization
                }
            })
            .then(function success(R) {

                $scope.detailProjectProgress = R.data.message;

            }, function error(R) { console.log(R.statusText); });

        };
        
        $scope.getListProjectProgress({id : $stateParams.id});
        
        $scope.$watch('detailProjectProgress',function(newValue){
            
            if (newValue){
                
                $(document).ready(function(){
                
                var timelineBlocks = $('.cd-timeline-block'),
                offset = 0.8;

                //hide timeline blocks which are outside the viewport
                hideBlocks(timelineBlocks, offset);

                //on scolling, show/animate timeline blocks when enter the viewport
                $(window).on('scroll', function () {
                  if (!window.requestAnimationFrame) {
                    setTimeout(function () {
                      showBlocks(timelineBlocks, offset);
                    }, 100);
                  } else {
                    window.requestAnimationFrame(function () {
                      showBlocks(timelineBlocks, offset);
                    });
                  }
                });

                function hideBlocks(blocks, offset) {
                  blocks.each(function () {
                    ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
                  });
                }

                function showBlocks(blocks, offset) {
                  blocks.each(function () {
                    ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                  });
                }
                
                });
                
            }
            
        });
        
    });

})();