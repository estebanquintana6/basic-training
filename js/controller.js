var app = angular.module("app", []);
app.controller("appctrl", function($scope){
    $scope.appTitle = "Linear interpolation";
    $scope.point = {x: null, y: null};
    $scope.points = [];
    $scope.input;
    $scope.output;
    var findClosest = function (){
      var higherTemp;

      for(var i= $scope.points.length-1; i>=0; i--){
        if($scope.points[i].x < $scope.input){
          console.log(i);
          return i;
        }
      }
    }

    var interpolate = function (closest){
        result = {
          x: null,
          y: null
        }
        result.x = $scope.input;
        result.y = ((result.x - $scope.points[closest].x) * ($scope.points[closest+1].y - $scope.points[closest].y)/($scope.points[closest+1].x - $scope.points[closest].x));
        result.y = result.y + $scope.points[closest].y;

        $scope.output = result.y;

    }

    $scope.submitPoint = function () {
      point = {
        x: $scope.point.x,
        y: $scope.point.y
      }
      $scope.points.push(point);
      $scope.points.sort(function(a,b){
        return a.x - b.x;
      });
      interpolate(findClosest());
      $scope.plot();
    };

    $scope.plot = function () {
      var chart = Highcharts.chart('container', {
        chart: {
             zoomType: 'xy'
         },
         title: {
           text: 'Linear Interpolation'
         },
          series: [{
              data: $scope.points
          }],
          marker: {
              enabled: true,
              radius: 2
          },
          states: {
               hover: {
                   lineWidthPlus: 0
               }
           }
        	// ... more options - see http://api.highcharts.com/highcharts
      });
    };




});
