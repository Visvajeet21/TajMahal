const firebaseConfig = {
    apiKey: "AIzaSyAjvAh4Xo23ZkMSBw-L-T3Q41szmtxIZQs",
    authDomain: "tajmahal-9c2d5.firebaseapp.com",
    databaseURL: "https://tajmahal-9c2d5-default-rtdb.firebaseio.com",
    projectId: "tajmahal-9c2d5",
    storageBucket: "tajmahal-9c2d5.appspot.com",
    messagingSenderId: "369223214417",
    appId: "1:369223214417:web:6117c5a057780a6a641f70",
    measurementId: "G-Y2CCYZSTH1"
  };

//initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference  to the database
var tajmahalDB=firebase.database().ref('tajmahal');

document.getElementById('tajmahal').addEventListener('submit',submitForm);

function  submitForm(e) {
   e.preventDefault();
   var Name=getElementVal('name');
   var Mail=getElementVal('email');
   var Phone=getElementVal('phone');
   var msg=getElementVal('message');

   saveMessages(Name, Mail, Phone ,msg);

   //enable alert
   setTimeout(()=>{document.querySelector('.alert').style.display='none';},3000);
   
   document.getElementById('tajmahal').reset();
}

const saveMessages=(Name,Mail,Phone,msg)=>{
    var tajmahalForm= tajmahalDB.push();
    newtajmahal.set({
        name:Name,
        email:Mail,
        phone:Phone,
        message:msg,
    })
};

const getElementVal=(id) =>{
    return document.getElementById(id).value;
};