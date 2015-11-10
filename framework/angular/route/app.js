/**
 * Created by liurui on 15/8/27.
 */
angular.module('app', ['ngRoute'])
    .config(function($locationProvider){
        $locationProvider.html5Mode = true
    })
    .controller('ViewController3', function () {
        this.name = '这是来自控制器的文字'
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/1', {
                templateUrl:'views/view1.html'
            })
            .when('/2', {
                templateUrl:'views/view2.html'
            })
            .when('/3', {
                templateUrl:'views/view3.html',
                controller:'ViewController3 as vc1'
            })
            .otherwise({
                redirectTo:'/1'
            });
    })