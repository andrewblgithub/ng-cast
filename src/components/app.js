angular.module('video-player')

  .component('app', {
    controller: function($http, youTube) {
      this.videos = exampleVideoData;
      this.video = this.videos[0];
      this.clickhandler = (video) => {
        this.video = video;
      };
      this.getsuccess = (response) => {
        this.videos = response.data.items;
        this.video = response.data.items[0];
      };
      this.searchhandler = youTube.searchhandler;
    },

    templateUrl: 'src/templates/app.html'
  });

