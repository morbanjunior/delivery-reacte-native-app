import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA-6JG28Zn4OVTCN4XIaBL_pjwxKxljXrA",
    authDomain: "rn-delivery-app.firebaseapp.com",
    projectId: "rn-delivery-app",
    storageBucket: "rn-delivery-app.appspot.com",
    messagingSenderId: "354699076742",
    appId: "1:354699076742:web:07c29119f856c3951b5d07"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;