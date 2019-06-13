// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCm3iuxfD4bGD4WhPx25w6bI4W9oPYfrsQ",
  authDomain: "elvon-590dc.firebaseapp.com",
  databaseURL: "https://elvon-590dc.firebaseio.com",
  projectId: "elvon-590dc",
  storageBucket: "elvon-590dc.appspot.com",
  messagingSenderId: "66794714951",
  appId: "1:66794714951:web:1c658c90e4286c0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var facebook = getInputVal('facebook');
  var residence = getInputVal('residence');
  var posting = getInputVal('posting');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, facebook, residence, posting, message);

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
function saveMessage(name, email, phone, facebook, residence, posting, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    facebook:facebook,
    residence:residence,
    posting:posting,
    message:message
  });
}