angular.module('video-player')

  .component('search', {
    bindings: {
      searchhandler: '<',
      userinput: '<',
      getsuccess: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
