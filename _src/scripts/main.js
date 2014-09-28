'use strict';

var images = [
  'reserve/unsplash_52d8277ccad75_1.JPG?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=9c48d0759552b0c84bd95490718de5c3',
  'reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=6365b53b83834a1c4b12e307c0c48145',
  '45/HWijjF7RwOPGEJ1nb4Zb_IMG_3773.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=5c4d815f60933514c19eda5655f240eb',
  '42/PcLGXNjMTdiFVKTrElCl__DSC2245.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=80dc290ceb62c1a0d18be0a68d4fbc2d', // nice
  '40/rqZBrx1WRsCtkqGSVBK6_IMG_0063.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=c3f433a9baf20dfe345f7ed138b0cf00',
  '40/x6YzbWWRq2sRhAacMjnl_Bangkok%20Indra%20market.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0b84130ff3b1b651883e2dd89483125e', // nice
  '39/F9g2FiPUSyC7IybhyI2p_09.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=7e4e433bffbdf68583db15b1bb4e607c',
  '38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=73aab3431ca0110acfb5b980b251c71f',
  '35/wkjFpgTwSPnxksbAxnkA_IMG_5192.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=341ab569dcf18336550392e754d6c2ef',
  '34/ddTzoX58Q153kjaitXl4_ny.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=82877b24aebbff41188623ceecf5de0c', // nice
  '34/WyVMN1W6Tves4NUkaXwh_14.JPG?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=f6c1bf0a817800de5d7815bad25ab8cd',
  '31/xDtuvK3GRJGUSUHgj0ew_IMG_3860.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=85f7ae890acb9b7e84f439b15250ba9e', // nice.
  '29/night-square.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=e53bc6735bc7131d71878d5bb0ff8bfb'
];

var image;

function updateBg() {
  image = 'url(\'//unsplash.imgix.net/' + images[Math.floor(Math.random() * images.length)] + '\')';
  document.body.style.backgroundImage = image;
}

updateBg();

var orbit = window.setInterval(updateBg, 20000);
