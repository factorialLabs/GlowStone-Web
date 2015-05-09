app.controller("ReservationsController", ['$scope','$state', 'Reservation',
function($scope, $state, Reservation){
    $scope.Reservation;
    
    $scope.reserveTable = function(){
        console.log("ReservationsController.reserveTable");
        Reservation.data = $scope.Reservation;
        console.log(Reservation);
        $state.go("reservations-confirm");
    }
}]);

app.controller("ReservationsConfirmController", ['$scope', 'Reservation', function($scope, Reservation){
    console.log(Reservation);
    $scope.Reservation = Reservation.data;
}]);