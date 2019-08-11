import firebase from 'firebase';

  
const firebaseConfig = {
  apiKey: "AIzaSyC5l-4mO1kdMVYmuRH5okqrTG9irCSRncg",
  authDomain: "stocker-2.firebaseapp.com",
  databaseURL: "https://stocker-2.firebaseio.com",
  projectId: "stocker-2",
  storageBucket: "",
  messagingSenderId: "1087665217708",
  appId: "1:1087665217708:web:34411a906aad0f6a"
};

firebase.initializeApp(firebaseConfig)

export default firebase;