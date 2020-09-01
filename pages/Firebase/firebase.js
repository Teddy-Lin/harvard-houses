import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXpin_25_FDZCkY5bk9LO8JvEdhUk0Ie4",
  authDomain: "blockd-da6b5.firebaseapp.com",
  databaseURL: "https://blockd-da6b5.firebaseio.com",
  projectId: "blockd-da6b5",
  storageBucket: "blockd-da6b5.appspot.com",
  messagingSenderId: "301110839105",
  appId: "1:301110839105:web:5666ad05767ae99bcdc3c0",
  measurementId: "G-MMKCXEEP8V"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
