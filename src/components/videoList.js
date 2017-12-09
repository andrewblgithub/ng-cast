angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      clickhandler: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
