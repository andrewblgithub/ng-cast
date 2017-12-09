angular.module('video-player')

  .component('search', {
    bindings: {
      searchhandler: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
