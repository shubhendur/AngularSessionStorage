(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['AuthenticationService', '$rootScope'];
    function HomeController(AuthenticationService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.logout = logout;
        initController();

        function initController() {
            getUserName();
        }
        function getUserName() {
            if (JSON.parse(sessionStorage.getItem('token')).username != null) {
                var user = JSON.parse(sessionStorage.getItem('token')).username;
                vm.user = user;
            }
        }
        function logout() {
            AuthenticationService.logout();
        }

    }

})();