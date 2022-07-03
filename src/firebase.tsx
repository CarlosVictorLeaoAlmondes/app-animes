// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Add the Firebase services that you want to use
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app´s Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later. `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyCToRwUe6OFJ46evfYNlI2_LVptx5h4py8",
  authDomain: "app-animes-react.firebaseapp.com",
  databaseURL: "https://app-animes-react-default-rtdb.firebaseio.com",
  projectId: "app-animes-react",
  storageBucket: "app-animes-react.appspot.com",
  messagingSenderId: "931577910980",
  appId: "1:931577910980:web:2be46c424efd343d2ddb91",
  measurementId: "G-SS1S6ZP0JV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
/*
Modelagem de dados no FireStore - Coleções e Documentos - PodCodar - Site do Sobrinho
https://www.youtube.com/watch?v=OT46V1reaPk
*/
