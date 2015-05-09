var Beacon = function (){
    this.name = "",
    this.id = "",
    this.description = "",
    this.image = ""
};

app.controller("BeaconController", ['$scope', '$state', 'Beacons', '$stateParams',
function($scope, $state, Beacons, $stateParams){
    
    // Load info from the Beacons service
    $scope.beacons = Beacons.beacons;
    console.log($stateParams);
    if ($stateParams && $stateParams.beaconId){
        
        $scope.currentBeacon = Beacons.getBeacon($stateParams.beaconId);
    }
}]);

app.controller("NewBeaconController", ['$scope', '$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.newBeacon;
    
    $scope.addBeacon = function (){
        console.log($scope.newBeacon);
        Beacons.addBeacon($scope.newBeacon);
        console.log(Beacons);
        $state.go("beacons");
    }
}]);