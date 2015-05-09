var Beacon = function (){
    this.name = "",
    this.id = "",
    this.description = "",
    this.image = ""
};

app.controller("BeaconController", ['$scope', '$state', 'Beacons', '$stateParams',
function($scope, $state, Beacons, $stateParams){
    
    // Load info from the Beacons service
    //$scope.beacons = Beacons.getBeaconFromParse(); // for the sidebar
    
    Beacon = Parse.Object.extend("Beacon");
    var query = new Parse.Query(Beacon);
    query.find()
    .then(function(results){
        $scope.beacons = results;
        for (var i = 0; i < $scope.beacons.length; i++){
            $scope.beacons[i] = $scope.beacons[i].attributes.beacon;
        }
        console.log($scope.beacons);
    });
    
    // Individual beacon pages
    if ($stateParams && $stateParams.beaconId){
        var beacon = Beacons.getBeacon($scope.beacons, $stateParams.beaconId);
        console.log(beacon);
        $scope.currentBeacon = beacon.beacon;
        $scope.currentBeaconIndex = beacon.index;
        $scope.updatedBeacon = $scope.currentBeacon;
    }
    
    $scope.modifyBeacon = function () {
        Beacons.updateBeacon($scope.updatedBeacon, $scope.currentBeaconIndex);
    }
}]);

app.controller("NewBeaconController", ['$scope', '$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.newBeacon;
    
    // Make a new beacon
    $scope.addBeacon = function (){
        //console.log($scope.newBeacon);
        Beacons.addBeacon($scope.newBeacon);
        //console.log(Beacons);
        $state.go("beacons");
    }
}]);