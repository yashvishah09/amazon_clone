import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBA8QyXUVlG-ZIf494x_I85xnSNsQU78sg',
  authDomain: 'clone-6596c.firebaseapp.com',
  projectId: 'clone-6596c',
  storageBucket: 'clone-6596c.appspot.com',
  messagingSenderId: '1093212260835',
  appId: '1:1093212260835:web:df3aa059cfc907412f38d6',
  measurementId: 'G-DPRS7RMVNF'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
