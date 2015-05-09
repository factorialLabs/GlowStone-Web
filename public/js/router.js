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
        url: "/new",
        templateUrl: "/partials/new-beacon.html",
        controller: "NewBeaconController"
    })
    .state("beacons.information", {
        url:"/:beaconId",
        templateUrl: "/partials/beacon-info.html",
        controller: "BeaconController"
        
    });
});
