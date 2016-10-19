(function() {
    'use strict';

    angular
        .module('movieFinder')
        .controller('searchController', searchController);

    searchController.$inject = ['movieFactory'];

    function searchController(movieFactory) {
        var vm = this;
        vm.title = 'searchController';
        vm.movieSearch = function(title) {
            movieFactory.getMovieData(title).then(function(response){
                vm.results = response.data;
            });
        }}
})();