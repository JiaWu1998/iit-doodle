var canvas = document.getElementById('canvas');
var saveButton = document.getElementById('submit');

saveButton.addEventListener('click',saveImage);

 function saveImage(){

    var data = canvas.toDataURL();

    var request = new XMLHttpRequest();
    
    request.open('POST', '/save.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('img='+data);
    
 }
 
 