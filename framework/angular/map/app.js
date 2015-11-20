/**
 * Created by liurui on 15/11/17.
 */

angular.module('app', [])
    .directive('bmap', function ($timeout) {
        return {
            restrict: 'E',
            template:'<div class="map"></div>',
            replace:true,
            link: function (scope, element, attrs) {
                $timeout(function () {
                    var map = new BMap.Map(element[0]);    // 创建Map实例
                    map.centerAndZoom("沛县", 14);  // 初始化地图,设置中心点坐标和地图级别


                    if(attrs.navCtrl){
                        map.addControl(new BMap.NavigationControl());
                    }

                    if(attrs.typeCtrl){
                        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                    }

                    if(attrs.scaleCtrl){
                        map.addControl(new BMap.ScaleControl());
                    }

                    if(attrs.overviewCtrl){
                        map.addControl(new BMap.OverviewMapControl());
                    }


                    //map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
                    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                });

            }
        }
    })