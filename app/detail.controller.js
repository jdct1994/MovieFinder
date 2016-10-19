(function() {
    'use strict';

    angular
        .module('movieFinder')
        .controller('detailController', detailController);

    detailController.$inject = ['movieFactory', '$stateParams'];

    function detailController(movieFactory, $stateParams) {
        var vm = this;
        vm.title = 'detailController';

        vm.x = $stateParams.movietag;

        movieFactory.getMovieDetails(vm.x).then(function(response){
            vm.movie = response.data;
        });
    }

})();