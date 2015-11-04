'use strict';

var app = angular.module('Metanome')

.config(function config( $stateProvider ) {
  $stateProvider
    .state('visualization', {
      url: '/test',
      views: {
        'main@': {
            controller: 'VisualizationCtrl',
            templateUrl: 'app/visualization/visualization.html'
         }
      }
    })
})

app.controller('VisualizationCtrl', function ($q, $scope, $timeout) {

    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.desserts = {
        "count": 9,
        "data": [
            {
                "name": "Frozen yogurt",
                "calories": { "value": 159.0 },
                "fat": { "value": 6.0 },
                "carbs": { "value": 24.0 },
                "protein": { "value": 4.0 },
                "sodium": { "value": 87.0 },
                "calcium": { "value": 14.0 },
                "iron": { "value": 1.0 }
            }, {
                "name": "Ice cream sandwich",
                "calories": { "value": 237.0 },
                "fat": { "value": 9.0 },
                "carbs": { "value": 37.0 },
                "protein": { "value": 4.3 },
                "sodium": { "value": 129.0 },
                "calcium": { "value": 8.0 },
                "iron": { "value": 1.0 }
            }, {
                "name": "Eclair",
                "calories": { "value":  262.0 },
                "fat": { "value": 16.0 },
                "carbs": { "value": 24.0 },
                "protein": { "value":  6.0 },
                "sodium": { "value": 337.0 },
                "calcium": { "value":  6.0 },
                "iron": { "value": 7.0 }
            }, {
                "name": "Cupcake",
                "calories": { "value":  305.0 },
                "fat": { "value": 3.7 },
                "carbs": { "value": 67.0 },
                "protein": { "value": 4.3 },
                "sodium": { "value": 413.0 },
                "calcium": { "value": 3.0 },
                "iron": { "value": 8.0 }
            }, {
                "name": "Jelly bean",
                "calories": { "value":  375.0 },
                "fat": { "value": 0.0 },
                "carbs": { "value": 94.0 },
                "protein": { "value": 0.0 },
                "sodium": { "value": 50.0 },
                "calcium": { "value": 0.0 },
                "iron": { "value": 0.0 }
            }, {
                "name": "Lollipop",
                "calories": { "value": 392.0 },
                "fat": { "value": 0.2 },
                "carbs": { "value": 98.0 },
                "protein": { "value": 0.0 },
                "sodium": { "value": 38.0 },
                "calcium": { "value": 0.0 },
                "iron": { "value": 2.0 }
            }, {
                "name": "Honeycomb",
                "calories": { "value": 408.0 },
                "fat": { "value": 3.2 },
                "carbs": { "value": 87.0 },
                "protein": { "value": 6.5 },
                "sodium": { "value": 562.0 },
                "calcium": { "value": 0.0 },
                "iron": { "value": 45.0 }
            }, {
                "name": "Donut",
                "calories": { "value": 452.0 },
                "fat": { "value": 25.0 },
                "carbs": { "value": 51.0 },
                "protein": { "value": 4.9 },
                "sodium": { "value": 326.0 },
                "calcium": { "value": 2.0 },
                "iron": { "value": 22.0 }
            }, {
                "name": "KitKat",
                "calories": { "value": 518.0 },
                "fat": { "value": 26.0 },
                "carbs": { "value": 65.0 },
                "protein": { "value": 7.0 },
                "sodium": { "value": 54.0 },
                "calcium": { "value": 12.0 },
                "iron": { "value": 6.0 }
            }
        ]
    };

    $scope.onpagechange = function(page, limit) {
        var deferred = $q.defer();

        $timeout(function () {
            deferred.resolve();
        }, 2000);

        return deferred.promise;
    };

    $scope.onorderchange = function(order) {
        var deferred = $q.defer();

        $timeout(function () {
            deferred.resolve();
        }, 2000);

        return deferred.promise;
    };
})
