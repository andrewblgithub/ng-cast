angular.module('video-player')
  .service('youTube', function($http) {
    this.searchhandler = _.debounce((userinput, getsuccess) => {
      if (userinput) {
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
          console.log('GETTIN IT!');
          getsuccess(response);
        }, function errorCallBack(response) {
          console.log('GET FAILED!');
        });
      }
    }, 100);
    //turned off live search and reduced debounce time for improved performance
  });
