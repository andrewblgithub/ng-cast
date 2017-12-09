angular.module('video-player')

  .component('app', {
    controller: function($http) {
      this.videos = exampleVideoData;
      this.video = this.videos[0];
      this.clickhandler = (video) => {
        this.video = video;
      };
      this.searchhandler = () => {
        $http({
          method: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search',
          params: {
            key: YOUTUBE_API_KEY,
            part: 'snippet',
            maxResults: 5,
            q: 'kirby nintendo'
          }
        }).then(function successCallback(response) {
          console.log(response.data.items);
          console.log(this.videos);
          this.videos = response.data.items;
        }, function errorCallBack(response) {
          console.log('GET FAILED!');
        });
      };
    },

    templateUrl: 'src/templates/app.html'
  });

