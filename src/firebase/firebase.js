import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV2wh7d2tsRbxwcNo33YZ4HYaq7DAeTts",
  authDomain: "tiktok-clone-cn.firebaseapp.com",
  databaseURL: "https://tiktok-clone-cn.firebaseio.com",
  projectId: "tiktok-clone-cn",
  storageBucket: "tiktok-clone-cn.appspot.com",
  messagingSenderId: "83884446218",
  appId: "1:83884446218:web:5a013fe683b82befdec5f3",
  measurementId: "G-30Q0H1G9QL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
