import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: 
  "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
