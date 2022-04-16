import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEtNnWyDAoPeVoQyJR-w_EBapAo9YfA8Y",
    authDomain: "sistema-5c26a.firebaseapp.com",
    projectId: "sistema-5c26a",
    storageBucket: "sistema-5c26a.appspot.com",
    messagingSenderId: "865235163896",
    appId: "1:865235163896:web:01e480dcf7d79c5b8a390d",
    measurementId: "G-QZPNYDE863"
  };
  


  const app = initializeApp(firebaseConfig);

export default firebaseConfig;