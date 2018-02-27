(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookies', '$rootScope', '$timeout'];
    function AuthenticationService($http, $cookies, $rootScope, $timeout) {
        var service = {};

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.logout = logout;

        return service;

        function Login(username, password, callback) {            
            $http.get('https://api.myjson.com/bins/rqbkh', { username: username, password: password })              
                .then(function (response) {
                    console.log(response.data);
                    callback(response);
                });
        }

        function SetCredentials(username, password) {
           var authdata = 'someKeyTokenaabbcc23345'+username + ':' + password;

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
            sessionStorage.setItem('token',JSON.stringify($rootScope.globals.currentUser));         
        } 
        function logout(){
            sessionStorage.removeItem('token');
        }    
    }     

})();