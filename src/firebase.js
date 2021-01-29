import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAcrC8WFMcfXI8NVwjNDqL-WzqSmpttCeA",
    authDomain: "react-final-project-eba09.firebaseapp.com",
    databaseURL: "https://react-final-project-eba09-default-rtdb.firebaseio.com",
    projectId: "react-final-project-eba09",
    storageBucket: "react-final-project-eba09.appspot.com",
    messagingSenderId: "446437310002",
    appId: "1:446437310002:web:3dbcf986d210e41d16062b"
    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase