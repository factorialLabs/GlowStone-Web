// UI-Router - has to load last. 
app.config(function ($stateProvider, $urlRouterProvider){

    // Redirect to home
    $urlRouterProvider.otherwise("/");
    
    // Define states
    $stateProvider
    // Root
    .state("home", {
        url: "/",
        templateUrl: "/partials/home.html"
    })
    .state("login", {
        url: "/login",
        templateUrl: "/partials/login.html"
    })
    .state("signup", {
        url: "/signup",
        templateUrl: "/partials/signup.html"
    })
    // Reservations view
    .state('reservations', {
        url: "/reservations",
        templateUrl: "/partials/reservations/reservations.html",
        controller: "ReservationsController"
    })
    // Confirmation page
    .state("reservations-confirm", {
        url: "/reservations/confirm",
        templateUrl: "/partials/reservations/confirm.html",
        controller: "ReservationsConfirmController"
    });
});