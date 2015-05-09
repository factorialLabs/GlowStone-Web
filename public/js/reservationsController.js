var Beacon = function (){
    this.name = "",
    this.id = "",
    this.description = "",
    this.image = ""
};

app.controller("BeaconController", ['$scope', '$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.beacons = Beacons.beacons;
    $scope.newBeacon;
    
    $scope.addBeacon = function (){
        console.log($scope.newBeacon);
        Beacons.addBeacon($scope.newBeacon);
        console.log(Beacons);
        $scope.beacons = Beacons.beacons;
        $state.go("beacons");
    }

    $scope.viewBeacon = function(){
    	console.log($scope.beacons)
    }
}]);
