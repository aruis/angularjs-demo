/**
 * Created by liurui on 15/8/27.
 */

//$(function () {
//    $('[data-toggle="tooltip"]').tooltip()
//})

angular.module('tip', [])
    .directive('tooltip', function () {
        return function (scope, element, attr) {
            element.tooltip({
                placement: 'top',
                title: attr.tooltip ? attr.tooltip : element.val()
            });

            scope.$on('$destroy',function(){
                element.tooltip('destroy');
            });

        }
    });
