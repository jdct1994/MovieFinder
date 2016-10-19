(function() {
    'use strict';

    angular
        .module('movieFinder')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    function movieFactory($http, $q) {
        var service = {
            getMovieData : getMovieData,
            getMovieDetails : getMovieDetails
        };

        return service;

        function getMovieData(title) {
            return $http.get('http://www.omdbapi.com/?s=' + title + '&r=json');

        }

        function getMovieDetails(title) {
            return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json');
        }
    }
})();