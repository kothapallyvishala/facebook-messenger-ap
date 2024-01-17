import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwwoF41S6NzTHu2kj5dbWrl_iplGXaWhU",
  authDomain: "facebook-messenger-clone-7f731.firebaseapp.com",
  projectId: "facebook-messenger-clone-7f731",
  storageBucket: "facebook-messenger-clone-7f731.appspot.com",
  messagingSenderId: "206678850178",
  appId: "1:206678850178:web:34e5a9c409dc87b44c929b",
  measurementId: "G-RXC715JF8B"

});

const db = firebaseApp.firestore();

export default db;