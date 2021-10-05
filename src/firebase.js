import * as firebase from 'firebase';
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyAxkFfCWhWhuU5unFJ6LsDDraYJ-yUb2Cg",
        authDomain: "unichat-2035d.firebaseapp.com",
        projectId: "unichat-2035d",
        storageBucket: "unichat-2035d.appspot.com",
        messagingSenderId: "598768503957",
        appId: "1:598768503957:web:089fbe1c6892270f829f9c"
}).auth();