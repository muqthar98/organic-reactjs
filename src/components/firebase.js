import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBftWfjUwrFPVy40yiw979Wfnrl0wJ2mII",
    authDomain: "e-commerce-reactjs.firebaseapp.com",
    projectId: "e-commerce-reactjs",
    storageBucket: "e-commerce-reactjs.appspot.com",
    messagingSenderId: "313632876230",
    appId: "1:313632876230:web:ba3ef2d024bb4d1231d9c7"
  };

  firebase.initializeApp(config)

  export default firebase;