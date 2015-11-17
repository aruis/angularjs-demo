/**
 * Created by liurui on 15/11/17.
 */

angular.module('app', ['ui.grid', 'ui.grid.selection'])
    .controller('ngGridCtrl', function ($scope) {
        $scope.ngData = [
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'},
            {类型: 'xxx', 分组: 'www', 编号: '123'}


        ];

        $scope.ngOptions = {
            data: 'ngData',
            enableSorting: false,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {name: '类型'},
                {name: '分组'},
                {name: '编号', displayName: 'Age (not focusable)', allowCellFocus: false}
            ]
        };


        $scope.ngOptions2 = {
            data: 'ngData',
            showGroupPanel: true,
            jqueryUIDraggable: true
        };

    });


