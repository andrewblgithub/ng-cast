angular.module('video-player')

  .component('app', {
    controller: function($http, youTube) {
      this.videos = [];
      this.video = null;
      this.query = '';
      this.next = '';
      this.previous = '';
      this.moreresults = () => {
        this.searchhandler(this.query, this.getsuccess, this.next);
      };
      this.clickhandler = (video) => {
        this.video = video;
      };
      this.getsuccess = (response, userinput) => {
        this.videos = response.data.items;
        if (userinput !== this.query) {
          this.video = response.data.items[0];
        }
        this.query = userinput;
        this.next = response.data.nextPageToken;
      };
      this.sharkattack = () => {
        alert('Welcome to Shark Tube! Brought to you by Andrew and Logan!');
      };
      this.searchhandler = youTube.searchhandler;
      this.searchhandler('frickin sharks with laser beans', this.getsuccess);
    },
    templateUrl: 'src/templates/app.html'
  });

