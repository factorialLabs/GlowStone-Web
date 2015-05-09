app.controller("ReservationsController", ['$scope', '$state', 'Reservation', 'User',
function($scope, $state, Reservation, User){
    $scope.Reservation;
    
    $scope.reserveTable = function(){
        console.log("ReservationsController.reserveTable");
        $scope.Reservation.date.setHours($scope.Reservation.date.getHours() + $scope.Reservation.time.getHours());
        $scope.Reservation.date.setMinutes($scope.Reservation.time.getMinutes());
        Reservation.data = $scope.Reservation;
        console.log(Reservation);
        $state.go("reservations-confirm");
    }
}]);

app.controller("ReservationsConfirmController", ['$scope', 'Reservation', 'User', function($scope, Reservation, User){
    console.log(Reservation);
    $scope.Reservation = Reservation.data;
}]);