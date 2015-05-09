// File is referenced in index.html and renders on all pages.

// Declare application
var app = angular.module('myApp', ['ui.router', 'parse-angular']);

// UI-Router
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
    // Reservations view
    .state('reservations', {
        url: "/reservations",
        templateUrl: "/partials/reservations.html",
        controller: "ReservationsController"
    });
});