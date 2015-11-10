/**
 * Created by liurui on 15/8/27.
 */
angular.module('cm.mvc', [])
    .controller('ParentController', function ($scope) {
        this.name = "parent";

        $scope.name = 'p2'
    })
    .controller('ChildController', function () {

    });