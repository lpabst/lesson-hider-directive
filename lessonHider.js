angular.module('directivePractice')
.directive('lessonHider', function(){

    return {
        restrict: 'E',
        templateUrl: 'lessonHider.html',
        scope: {
            lesson: '=',
            dayAlert: '&',
            delete: '&',
        },
        link: function (scope, elem, atts){
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;
            
                scope.schedule.forEach(function(scheduleDay){
                    if (scheduleDay.lesson === scope.lesson){
                        scope.toggleChecked();
                        scope.lessonDay = scheduleDay.weekday;
                        return;
                    }
                })
                
            })
            scope.toggleChecked = function(){
                elem.toggleClass('checked_off');
            }

        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();

            // $scope.deleteLesson = function(index){
            //     elem.delete();
            // }
        }
    }



});