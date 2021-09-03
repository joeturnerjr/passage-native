import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2FblpZjinlV38qjzXEfuhQ2XdKOTkIkY",
  authDomain: "hellopassage-webapp.firebaseapp.com",
  databaseURL: "https://hellopassage-webapp.firebaseio.com",
  projectId: "hellopassage-webapp",
  storageBucket: "hellopassage-webapp.appspot.com",
  messagingSenderId: "596920541958",
  appId: "1:596920541958:web:a64056bd6ce54cb5897487",
  measurementId: "G-P5HWVWS1NX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
