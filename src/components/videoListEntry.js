angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      clickhandler: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
