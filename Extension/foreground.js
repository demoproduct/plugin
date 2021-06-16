const video = document.querySelector('video');
video.addEventListener('pause', (event) => {
   // var timeIs = $('.ytp-time-current').innerHTML;
var timeIs = document.getElementsByClassName('ytp-time-current')[0].innerHTML.replace(':','').replace(/^0+/, '');

 var xhttp = new XMLHttpRequest();
  var response;
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          response = xhttp.responseText;
        var wins = window.open();
        wins.document.write(JSON.stringify(JSON.parse(response), null, 2));
      }
  };

  xhttp.open("GET", "https://0ggvvxcdo0.execute-api.us-east-1.amazonaws.com/dev/products/demovideo1/time/"+timeIs, true);
  xhttp.send();
});
