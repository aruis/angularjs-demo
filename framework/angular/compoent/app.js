/**
 * Created by liurui on 15/8/27.
 */
angular.module('component', [])
    .directive('hot',function(){
        return function(socpe,element){
            element.addClass('red')
        }
    })
    .directive('panel', function () {
        return {
            templateUrl: 'components/panel.html',
            transclude: true,
            scope:{
                title:"@"
            }
        }
    });
