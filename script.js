import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 

 import { GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // Add your own Firebase config here
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLl4pa5Gr-D4aGooficdjWOBNCVse6vL0",
    authDomain: "social-media-e62ce.firebaseapp.com",
    projectId: "social-media-e62ce",
    storageBucket: "social-media-e62ce.appspot.com",
    messagingSenderId: "923224973376",
    appId: "1:923224973376:web:8990e1fc9a004297157fa5",
    measurementId: "G-G1C00670JP"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  //

  const provider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  //
  const signInFacebook = document.getElementById('facebook-login');
  const signInGoogle = document.getElementById("google-login");
  const signInGitHub = document.getElementById("github-login");
  //
  const signOutButton = document.getElementById("signOutButton");
  const message = document.getElementById("message");
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const id = document.getElementById("id");
  const mainforms = document.getElementById("main-forms");
  //
  signOutButton.style.display = "none";
  message.style.display = "none";

  //
  const userSignIn = async() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
  }

  //
  const userSignInFcebook = async() => {
    signInWithPopup(auth, FacebookProvider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
  }
  //
  const userSignInGthub = async() => {
    signInWithPopup(auth, GithubProvider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
  }
  //
   const userSignOut = async() => {
    signOut(auth).then(() => {
        alert("You have signed out successfully!");
    }).catch((error) => {})
  }

  onAuthStateChanged(auth, (user) => {
    if(user) {
      signOutButton.style.display = "block";
      message.style.display = "block";
      mainforms.style.display = "none";
      userName.innerHTML = user.displayName;
      userEmail.innerHTML = user.email;
      id.src = user.photoURL;
    } else {
      signOutButton.style.display = "none";
      message.style.display = "none";
      mainforms.style.display = "block";
    }
  })
//
  signInGoogle.addEventListener('click', userSignIn);
  signInFacebook.addEventListener('click', userSignInFcebook);
  signInGitHub.addEventListener('click',  userSignInGthub);
  signOutButton.addEventListener('click', userSignOut);
