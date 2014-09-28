'use strict';

var key = 'On1e8GCuPWAcEcbvrSoNUGDIzsHWvVYCOUqohI0NBTF1nPBaxq';
var url = '//api.tumblr.com/v2/blog/unsplash.tumblr.com/posts/photo?api_key=' + key;
var data = null;
var request = new XMLHttpRequest();

request.open('GET', url, true);
request.onload = loadHandler;
request.onerror = errorHandler;
request.send();

function loadHandler() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    data = JSON.parse(request.responseText);
    dataHandler(data);
  } else {
    console.log('Server error.', request.responseText);
  }
}

function errorHandler() {
  console.log('Connection problem.', request.responseText);
}

function dataHandler(data) {
  console.log(data);
}

// var url = 'https://unsplash.imgix.net/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?q=75&fm=jpg&auto=format&s=badee9ec6f68a1be59bbaae87b7fe147';
var url = 'https://unsplash.imgix.net/reserve/unsplash_52d8277ccad75_1.JPG?q=75&fm=jpg&auto=format&s=6f89bc9c4262ae2aed247bdae6f7b388';

document.body.style.backgroundImage = 'url(\'' + url + '\')';
