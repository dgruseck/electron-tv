var videoSource = new Array();
videoSource[0] = "./../videos/VP8_720_10s_1MB.webm";
videoSource[1] = "./../videos/VP8_720_10s_5MB.webm";
videoSource[2] = "./../videos/VP8_720_10s_20MB.webm";
videoSource[3] = "./../videos/VP8_1080_10s_1MB.webm";
videoSource[4] = "./../videos/VP8_1080_10s_5MB.webm";
videoSource[5] = "./../videos/VP8_1080_10s_10MB.webm";
videoSource[6] = "./../videos/VP9_720_10s_1MB.webm";
videoSource[7] = "./../videos/VP9_720_10s_5MB.webm";
videoSource[8] = "./../videos/VP9_720_10s_10MB.webm";
videoSource[9] = "./../videos/VP9_1080_10s_1MB.webm";
videoSource[10] = "./../videos/VP9_1080_10s_5MB.webm";
videoSource[11] = "./../videos/VP9_1080_10s_10MB.webm";
videoSource[12] = "./../videos/bigbig.mp4";
videoSource[13] = "./../videos/bigsmall.mp4";
// videoSource[2] =
//   "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4";
var videoCount = videoSource.length;
var i = 0;
document.getElementById("player").setAttribute("src", videoSource[0]);
document.getElementById("player").play();

function videoPlay(videoNum) {
  document.getElementById("title").innerHTML = videoSource[videoNum];
  document.getElementById("player").setAttribute("src", videoSource[videoNum]);
  document.getElementById("player").play();
}

document.getElementById("player").addEventListener("ended", myHandler, false);
function myHandler() {
  i++;
  if (i >= videoCount) {
    i = 0;
    videoPlay(i);
  } else {
    videoPlay(i);
  }
}

function calctime() {
  var t = setTimeout(calctime, 1000);
  var hours = Math.floor(t / 3600);
  var totalSeconds = t % 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  document.getElementById("time").innerHTML =
    "Time running: " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
}

calctime();
