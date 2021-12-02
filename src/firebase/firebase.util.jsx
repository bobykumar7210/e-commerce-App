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
  export const auth = getAuth();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
});
  
  export const signInWithGoogle=()=>signInWithPopup(auth, provider)
.then(result=>{
     // This gives you a Google Access Token. You can use it to access the Google API.
     const credential = GoogleAuthProvider.credentialFromResult(result);
     const token = credential.accessToken;
     console.log("token : ",token);
     // The signed-in user info.
     const user = result.user;
     console.log(user);

}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(errorCode,"  ",errorMessage);
  // ...
});