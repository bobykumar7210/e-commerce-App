import firebase from 'firebase/compat/app'


import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBrRMuGZToYInwEka4MuyP6uaIKOzWFYG4",
    authDomain: "crwn-db-729c1.firebaseapp.com",
    projectId: "crwn-db-729c1",
    storageBucket: "crwn-db-729c1.appspot.com",
    messagingSenderId: "491136279713",
    appId: "1:491136279713:web:a0808c341a448284bc7ce0",
    measurementId: "G-LFR0XDESQ0"
  }; 

  firebase.initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

  export const signInWithGoogle=()=>signInWithPopup(auth, provider);
