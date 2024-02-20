//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDP_x7Hb4WF-0PYuW3YZZRkn2zEjdPeD8M",
    authDomain: "comp1800-202410-demo-79f26.firebaseapp.com",
    projectId: "comp1800-202410-demo-79f26",
    storageBucket: "comp1800-202410-demo-79f26.appspot.com",
    messagingSenderId: "691821495325",
    appId: "1:691821495325:web:0b7bfd68b4fe4e89e772f4"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
