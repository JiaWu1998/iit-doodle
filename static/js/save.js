var canvas = document.getElementById('canvas');
var saveButton = document.getElementById('submit');


saveButton.addEventListener('click',saveImage);

 function saveImage(){
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCu-Dc7zMz7vkEaus-5yic_ZmdWgh46iuU",
    authDomain: "iit-doodle-img.firebaseapp.com",
    databaseURL: "https://iit-doodle-img.firebaseio.com",
    projectId: "iit-doodle-img",
    storageBucket: "iit-doodle-img.appspot.com",
    messagingSenderId: "664829745808"
  };
  firebase.initializeApp(config);

    var database = firebase.database();
    var encodedImg = database.ref('pngs');
    
    var key = canvas.toDataURL();
    
    var result = encodedImg.push({
     name:'image',
     base64: key
    })

    // var request = new XMLHttpRequest();
    
    // request.onreadystatechange = function(){
    //  if(request.readyState == 4 && request.status == 200){
    //     var response = request.responseText;
    //     window.open(response, '_blank', 'location=0, menubar=0');
    //  }
    // }
    
    // request.open('POST', 'save.php', true);
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // request.send('img='+data);
    
 }
 
 