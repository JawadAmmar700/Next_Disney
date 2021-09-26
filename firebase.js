import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB3Isid3QQV1PuAvl3PLFO9DoxFYQrRO-o",
    authDomain: "disney-clone-bc67d.firebaseapp.com",
    projectId: "disney-clone-bc67d",
    storageBucket: "disney-clone-bc67d.appspot.com",
    messagingSenderId: "700712864668",
    appId: "1:700712864668:web:5738ed994b47ed9a0a9659",
    measurementId: "G-3G4ZMWYDMQ"
};

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
