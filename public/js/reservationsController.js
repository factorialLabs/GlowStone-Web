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
    var Beacon = Parse.Object.extend("Beacon");
    var query = new Parse.Query(Beacon);
    query.find()
    .then(function(results){
        $scope.beacons = results;
        for (var i = 0; i < $scope.beacons.length; i++){
            $scope.beacons[i] = $scope.beacons[i].attributes.beacon;
            
        }
	        // Individual beacon pages
	    if ($stateParams && $stateParams.beaconId){
	        var beacon = Beacons.getBeacon($scope.beacons, $stateParams.beaconId);
	        $scope.currentBeacon = beacon.beacon;
	        $scope.currentBeaconIndex = beacon.index;
	        $scope.updatedBeacon = $scope.currentBeacon;
	    }
    });
    
    
    
    $scope.modifyBeacon = function () {
        Beacons.updateBeacon($scope.updatedBeacon, $scope.currentBeaconIndex);
        $scope.beacons = Beacons.beacons;
        $state.reload();
        $state.go("beacons");
    }

    $scope.deleteBeacon = function () {
        Beacons.deleteBeacon($scope.updatedBeacon);
        $state.reload();
        $state.go("beacons");
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
        Beacon = Parse.Object.extend("Beacon");
		  
        $state.go("beacons");
        $scope.beacons = Beacons.beacons;
     	$state.reload();
    }
}]);