import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCxr9q_MKoAPG75CQDdgeS6V-s6N36tYhA",
    authDomain: "e-commerce-416e9.firebaseapp.com",
    projectId: "e-commerce-416e9",
    storageBucket: "e-commerce-416e9.appspot.com",
    messagingSenderId: "530049685723",
    appId: "1:530049685723:web:cb09cb3de432e944bb94fe",
    measurementId: "G-GJQ970JYV3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => (
        auth
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        })
    )

export default firebase;