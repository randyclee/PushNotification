importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyDX2V0h0iLLrLADlAUmoBLk4zHG_xzAEKU",
  authDomain: "pushnotification-cbd2e.firebaseapp.com",
  databaseURL: "https://pushnotification-cbd2e.firebaseio.com",
  projectId: "pushnotification-cbd2e",
  storageBucket: "pushnotification-cbd2e.appspot.com",
  messagingSenderId: "117879701626",
  appId: "1:117879701626:web:c372a9d578949cbb"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const messaging = firebase.messaging();
/*
messaging.getToken().then(function(currentToken) {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch(function(err) {
  console.log('An error occurred while retrieving token. ', err);
});
*/
