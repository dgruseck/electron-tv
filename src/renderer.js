var embed = document.createElement("embed");
embed.type = "application/x-mpvjs";

document.body.insertBefore(embed, document.body.firstChild);

embed.addEventListener("message", function(recv) {
  if (recv.data.type == "ready") {
    var type = "command";
    var data = ["loadfile", "../videos/bigbig.mp4"];
    const send = { type, data };
    embed.postMessage(send);
  }
});
