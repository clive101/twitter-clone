import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnXwuGgc_nhG1KnpRFGGDey5OzyeWbyiQ",
    authDomain: "twitter-clone-c4504.firebaseapp.com",
    projectId: "twitter-clone-c4504",
    storageBucket: "twitter-clone-c4504.appspot.com",
    messagingSenderId: "321108106565",
    appId: "1:321108106565:web:ee9f57cdd04a0183b6b22c",
    measurementId: "G-NW1JL3WTNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;