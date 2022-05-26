import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_VMeHZ5eddXR8hNH_ESjYUuEvquX4pdw",
    authDomain: "reels-72951.firebaseapp.com",
    projectId: "reels-72951",
    storageBucket: "reels-72951.appspot.com",
    messagingSenderId: "247101814986",
    appId: "1:247101814986:web:2f3a987cca7c0fc441dc33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    getTimeStamp : firebase.firestore.FieldValue.getTimeStamp
}

export const storage = firebase.storage()