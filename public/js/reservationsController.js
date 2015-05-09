app.controller("ReservationsController", ['$scope', '$state',
                                          'Reservation',
function($scope, $state, Reservation){
    $scope.Reservation;
    
    $scope.reserveTable = function(){
        console.log("ReservationsController.reserveTable");
        Reservation = $scope.Reservation; 
        console.log($scope.Reservation);
        $state.go("reservations-confirm");
    }
}]);

app.controller("ReservationsConfirmController", ['$scope', 'Reservation', function($scope, Reservation){
    
    $scope.Reservation = Reservation;
    console.log($scope.Reservation);
}]);