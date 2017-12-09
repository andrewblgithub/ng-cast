angular.module('video-player')
  .service('youTube', function($http) {
    this.searchhandler = (userinput, getsuccess) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          format: 5,
          q: userinput
        }
      }).then(function successCallback(response) {
        console.log('We GETin\' it!');
        getsuccess(response);
      }, function errorCallBack(response) {
        console.log('GET FAILED!');
      });
    };
  });
