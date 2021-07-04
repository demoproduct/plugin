const ce_main_container = document.createElement('DIV');
ce_main_container.classList.add('ce_main');
ce_main_container.id = 'test';
document.querySelector('body').appendChild(ce_main_container);


const video = document.querySelector('video');
video.addEventListener('pause', (event) => {
    var timeIs = document.getElementsByClassName('ytp-time-current')[0].innerHTML.replace(':','').replace(/^0+/, '');
    // var timeIs = $('.ytp-time-current')[0].innerHTML;
     var myDiv = document.getElementById("test");
     myDiv.setAttribute("style", "display:block;");
     myDiv.innerHTML = '<a href="https://www.w3schools.com" target="_blank"><img src="" alt="W3Schools.com" width="100" height="132"></a>';

 var xhttp = new XMLHttpRequest();
  var response;
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          response = xhttp.responseText;
        var wins = window.open();
        //wins.document.write(response);
        createTable(wins,response);
      }
  };

  xhttp.open("GET", "https://0ggvvxcdo0.execute-api.us-east-1.amazonaws.com/dev/products/demovideo1/time/"+timeIs, true);
  xhttp.send();
});

video.addEventListener('play', (event) => {
  var myDiv = document.getElementById("test");
     myDiv.setAttribute("style", "display:none;");
});

function createTable(wins,response)
{
var res = JSON.parse(response);

var bas = res.productDetails;


    var tableBody = '<table width="80%" align="center" style="font-size:12px;border-collapse:collapse;" border="1"><tr style="font-weight:bold;background:#16A1E7;"><td style="color:white;width:40%">Name</td><td style="color:white;">Price</td><td style="color:white;">URL</td></tr>';

        bas.forEach(function(d)
        {
            tableBody += '<tr><td>'+d.name+'</td><td>'+"$"+d.price+'</td><td><a href='+d.imageUri+'target=_blank>Buy</a></td></tr>';
        });
            tableBody += '<table>';

      wins.document.write(tableBody);
}
