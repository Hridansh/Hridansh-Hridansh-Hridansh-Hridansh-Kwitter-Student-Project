
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDaRw6IHsTp_MOE2CR9YSVBjpC2CbMedrg",
      authDomain: "kwitter-5728c.firebaseapp.com",
      databaseURL: "https://kwitter-5728c.firebaseio.com",
      projectId: "kwitter-5728c",
      storageBucket: "kwitter-5728c.appspot.com",
      messagingSenderId: "308384185843",
      appId: "1:308384185843:web:8cda47f85c587b38e26686",
      measurementId: "G-963EPLC9KT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function add_room_name()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding a room name"
          })

          localStorage.setItem("room_name", room_name)

          window.location = "kwitter_page.html";

    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = "<div class = 'room_name' id =" +Room_names + "onClick = 'redirectToRoomName(this.id)'>#" +Room_names+ "<div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}
