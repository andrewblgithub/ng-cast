angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      clickhandler: '<',
      moreresults: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
