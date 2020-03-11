var ziehen = document.getElementById("drag");

var pixel = 20;
var img = document.getElementById("img");
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
canvas.getContext("2d").drawImage(img,0,0,img.width,img.height);
canvas.getContext("2d").drawImage(ziehen,30,30,ziehen.width,ziehen.height);
canvas.setAttribute("id","dropzone")
document.body.appendChild(canvas);

var dropzone = document.getElementById("dropzone");
ziehen.ondragstart = function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

dropzone.ondragover = function (ev) {
   ev.preventDefault()
};

dropzone.ondrop = function (ev) {
    ev.preventDefault();
    dropzone.appendChild(ziehen);
};
