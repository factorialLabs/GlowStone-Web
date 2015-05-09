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
    .state("beacons",{
        url: "/beacons",
        templateUrl: "/partials/beacons.html",
        controller: "BeaconController"
    })
    .state("beacons.new", {
        templateUrl: "/partials/new-beacon.html",
        controller: "BeaconController"
    })
    .state("beacons.information", {
        templateUrl: "/partials/beacon-info"
        
    });
});
