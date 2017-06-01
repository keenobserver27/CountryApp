var app = angular.module('countryApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/Home', { templateUrl: '/Templates/countryView.html', controller: 'CountryController' });
    $routeProvider.when('/Home/Details/:name', { templateUrl: '/Templates/countryDetailView.html', controller: 'CountryDetailController' });
    $routeProvider.otherwise({ redirectTo: '/Home' });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});