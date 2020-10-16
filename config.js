import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCEYxd-lxouSHMsfVjPrQY5-TyCNE_r7rI",
    authDomain: "bartersystem-85daa.firebaseapp.com",
    databaseURL: "https://bartersystem-85daa.firebaseio.com",
    projectId: "bartersystem-85daa",
    storageBucket: "bartersystem-85daa.appspot.com",
    messagingSenderId: "897386620197",
    appId: "1:897386620197:web:80e61898616229d54166cc",
    measurementId: "G-4GKLL73MPM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();