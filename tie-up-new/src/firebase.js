 import firebase from "firebase/compat/app";
 import "firebase/compat/auth";
 
 import "firebase/compat/firestore";
 
 
 
 const firebaseConfig = {
    apiKey: "AIzaSyAVVsgvPgfRGuqPuDRMvRYeGsuLNvdmZRE",
    authDomain: "tie-upfit-bb603.firebaseapp.com",
    projectId: "tie-upfit-bb603",
    storageBucket: "tie-upfit-bb603.appspot.com",
    messagingSenderId: "542169200400",
    appId: "1:542169200400:web:db06c86062effbbd3a5795"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();
 export {db, auth}

