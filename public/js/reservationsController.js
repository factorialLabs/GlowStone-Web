var Beacon = function (){
    this.name = "",
    this.id = "",
    this.description = "",
    this.image = ""
};

app.controller("BeaconController", ['$state', 'Beacons',
function($scope, $state, Beacons){
    $scope.newBeacon;
    
    $scope.addBeacon = function (){

        $state.go("beacons");
    }
}]);
