var Beacon = function (){
    this.name = "",
    this.id = "",
    this.description = "",
    this.image = ""
};

app.controller("BeaconController", ['$scope', '$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.beacons;
    // Load info from the Beacons service
    Beacons.getBeaconFromParse(
        function(results){
            $scope.beacons = results;
            for (var i = 0; i < results.length; i++){
                $scope.beacons[i] = results[i].attributes.beacon;
            }
            console.log($scope.beacons);
        }
    );
}]);

app.controller("ExistingBeaconController", ['$scope', '$state', '$stateParams', 'Beacons',
function ($scope, $state, $stateParams, Beacons){

    if ($stateParams && $stateParams.beaconId){
        var beacon = Beacons.getBeacon($scope.beacons, $stateParams.beaconId);
        $scope.currentBeacon = beacon.beacon;
        $scope.currentBeaconIndex = beacon.index;
        $scope.updatedBeacon = $scope.currentBeacon;
    }    
    
    $scope.modifyBeacon = function () {
        Beacons.updateBeacon($scope.updatedBeacon, $scope.currentBeaconIndex);
        $state.reload();
        $state.go("beacons");

    }

    $scope.deleteBeacon = function () {
        Beacons.deleteBeacon($scope.updatedBeacon, function(){
            $state.go("beacons", {}, {reload:true});
        });
        
    }
    
}]);

app.controller("NewBeaconController", ['$scope', '$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.newBeacon;
    
    $scope.addBeacon = function (){
        Beacons.addBeacon($scope.newBeacon);
        
        $state.go("beacons", {}, {reload:true});
        $scope.beacons = Beacons.beacons;
    }
}]);