(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService'];
    function LoginController($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
           // AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.statusText=="OK" && response.data.username=="username" && response.data.password=="password") {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } 
            });
        };
    }

})();
