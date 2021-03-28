var firebaseConfig = {
      apiKey: "AIzaSyCpD9sMltgYvsutaSbgz2c7YMKtDc5z4xE",
      authDomain: "kwitter-e82da.firebaseapp.com",
      databaseURL: "https://kwitter-e82da-default-rtdb.firebaseio.com",
      projectId: "kwitter-e82da",
      storageBucket: "kwitter-e82da.appspot.com",
      messagingSenderId: "636757216993",
      appId: "1:636757216993:web:174075fd0dc09e8245b1a0",
      measurementId: "G-56YSMS8MHB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome "+ user_name ;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}