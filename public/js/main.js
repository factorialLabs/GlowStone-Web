var app = angular.module('myApp', ['ui.router', 'parse-angular']);

app.config(function ($stateProvider, $urlRouterProvider){
    
    // Redirect to home
    $urlRouterProvider.otherwise("/"); 
});