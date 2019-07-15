import firebase from 'firebase/app'
import 'firebase/firestore'

let config = {
  apiKey: "AIzaSyCf5q_gtg7P4msFjuXWT4fSqLh0cATaAeU",
  authDomain: "burgerqueen-e45c6.firebaseapp.com",
  projectId: "burgerqueen-e45c6",
  };
  firebase.initializeApp(config);

  export default firebase