  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCDo4-2-Y7CDOTD47vt24rjfSSemfMA_dk",
    authDomain: "project-5448263874458023750.firebaseapp.com",
    databaseURL: "https://project-5448263874458023750.firebaseio.com",
    projectId: "project-5448263874458023750",
    storageBucket: "project-5448263874458023750.appspot.com",
    messagingSenderId: "355399820225",
    appId: "1:355399820225:web:fa968599693654a8884540",
    measurementId: "G-TSNKB4RD70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// Reference messages collection
var db = firebase.database();
var messagesRef = db.ref('register');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm (e){
  e.preventDefault();

  // Get values
  var firstName = getInputVal('first_name');
  var lastName = getInputVal('last_name');
  var email = getInputVal('email');
  var pass = getInputVal('pass');
  var address = getInputVal('add');
//   var city = getInputVal('city');
//   var state = getInputVal('state');
//   var pin = getInputVal('pin');
//   var agree = getInputVal('agree');

  // Save message
  saveMessage(firstName, lastName, email, pass, address, city, state, pin, agree);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstName, lastName, email, pass, address, /*city, state, pin, agree*/){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    "First Name": firstName, 
    "Last Name": lastName, 
    Email: email, 
    Mobile: pass, 
    How_know_me: address, 
//     City: city, 
//     State: state, 
//     PIN: pin, 
//     Agree: agree
  });
}
