import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCfN-4L1vnj8jd8RzSArit5s8x6sO6z5Q4",
  authDomain: "whatsapp-2-26fec.firebaseapp.com",
  projectId: "whatsapp-2-26fec",
  storageBucket: "whatsapp-2-26fec.appspot.com",
  messagingSenderId: "947322197203",
  appId: "1:947322197203:web:5ef2833eff89ebc4bbb026"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();


const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};



