// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwpOg_uf_rOAWJSXid-MAG5ro43lHwXBc",
  authDomain: "js-buscaminas-casero.firebaseapp.com",
  projectId: "js-buscaminas-casero",
  storageBucket: "js-buscaminas-casero.appspot.com",
  messagingSenderId: "50605856455",
  appId: "1:50605856455:web:529c637e7805c19a4d90e2",
  measurementId: "G-4W3RS1JMDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const analytics = getAnalytics(app);

export const fire_saveScore = (playerName, score) =>
  addDoc(collection(db, "minas"), { playerName, score })

export const fire_getScores = () => {
  getDocs(collection(db, "minas"))
}

export const fire_onShowScore = (callback) => {
  onSnapshot(collection(db, "minas"), callback);
}
