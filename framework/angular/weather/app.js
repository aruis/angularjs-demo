/**
 * Created by liurui on 15/11/17.
 */

angular.module('app',[])
    .controller('weatherCtrl', function ($scope,$http) {

        $scope.getWeather = function(){
            $http.get('https://api.heweather.com/x3/weather?city='+$scope.city+'&key=43d711768b384aeba7a02d0c2e6cd695')
                .then(function (result) {
                if(result.status == 200){
                    $scope.daily_forecast = result.data['HeWeather data service 3.0'][0].daily_forecast;
                    console.log($scope.daily_forecast)
                }
            })
        };



    });


