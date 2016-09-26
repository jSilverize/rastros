'use strict';

angular.module('rastros', [
    'ngRoute',
    'ngAnimate',
    'duScroll',
]);

angular.module('rastros')
.config(function ($locationProvider, $routeProvider, momentProvider) {

    momentProvider.locale('pt-br');

    // Routes
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/home-template.html',
            controller : 'HomeController',
        })
        .when('/404', {
            templateUrl: 'app/templates/404-template.html',
            controller : '404Controller',
        })
        .when('/my/login', {
            templateUrl: 'app/templates/auth-login-template.html',
            controller : 'LoginController',
            authPage   : true,
        })
        .when('/my/register', {
            templateUrl: 'app/templates/auth-register-template.html',
            controller : 'RegisterController',
            authPage   : true,
        })
        .when('/my/garage', {
            templateUrl  : 'app/templates/garage/garage-template.html',
            controller   : 'GarageController',
            authenticated: true,
        })
        .when('/my/garage/add', {
            templateUrl  : 'app/templates/garage/add-car-template.html',
            controller   : 'GarageAddController',
            authenticated: true,
        })
        .otherwise({
            redirectTo: '/404'
        });
});
