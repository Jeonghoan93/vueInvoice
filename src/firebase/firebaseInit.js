import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrHHCbpazbEmn8vCoyClxh3fIls4vRqcI",
  authDomain: "partyx-vue.firebaseapp.com",
  projectId: "partyx-vue",
  storageBucket: "partyx-vue.appspot.com",
  messagingSenderId: "107925872430",
  appId: "1:107925872430:web:9a2e2480db7bdf53dba4bf",
  measurementId: "G-S9B7QH7DKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
