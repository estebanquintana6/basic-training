var app = angular.module("app", []);
app.controller("appctrl", function($scope){
    $scope.appTitle = "Linear interpolation";
    $scope.point = {x: null, y: null};
    $scope.points = [];

    $scope.submitPoint = function () {
      point = {
        x: $scope.point.x,
        y: $scope.point.y
      }
      $scope.points.push(point);
    };


    var chart = Highcharts.chart('container', {
        series: [{
            data: $scope.points
        }],
      	// ... more options - see http://api.highcharts.com/highcharts
    });


});
