app.controller("ReservationsController", ['$scope','$state', 'Reservation',
function($scope, $state, Reservation){
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

app.controller("ReservationsConfirmController", ['$scope', 'Reservation', function($scope, Reservation){
    console.log(Reservation);
    $scope.Reservation = Reservation.data;
}]);