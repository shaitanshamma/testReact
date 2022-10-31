import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjcyDNqsJUSR_z_a6RvEl-_7ityI6Kxuc",
    authDomain: "testreact-1f146.firebaseapp.com",
    databaseURL: "https://testreact-1f146-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testreact-1f146",
    storageBucket: "testreact-1f146.appspot.com",
    messagingSenderId: "594443389715",
    appId: "1:594443389715:web:0ccbe3a09165013ccaa8e6"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();