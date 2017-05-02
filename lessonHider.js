angular.module('directivePractice')
.directive('lessonHider', function(){

    return {
        restrict: 'E',
        templateUrl: 'lessonHider.html',
        scope: {
            lesson: '=',
        },
        link: function (scope, elem, atts){
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;
            
                scope.schedule.forEach(function(scheduleDay){
                    if (scheduleDay.lesson === scope.lesson){
                        elem.css('text-decoration', 'line-through');
                        return;
                    }
                })
                
            })
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        }
    }



});