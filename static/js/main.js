var canvas= document.getElementById('canvas');
var context= canvas.getContext('2d');

var radius= 10;
var dragging = false;

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

context.lineWidth = radius*2;

var putPoint= function(e){
	if(dragging){
	context.lineTo(e.clientX, e.clientY);
	context.stroke();
	context.beginPath();
	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
	context.fill();
	context.beginPath();
	context.moveTo(e.clientX, e.clientY);
	}
}

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

 function saveImage() {
                var ua = window.navigator.userAgent;
 
                if (ua.indexOf("Chrome") > 0) {
                    // save image without file type
                    var canvas = document.getElementById("canvas");
                    document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
 
                    // save image as png
                    var link = document.createElement('a');
                    link.download = "test.png";
                    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
                    link.click();
                }
                else {
                    alert("Please use Chrome");
                }
            }
