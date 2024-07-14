// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0b-DyZOfDCSzOg2brbJNbgKQX9w8CRxk",
  authDomain: "fir-prc-e67be.firebaseapp.com",
  projectId: "fir-prc-e67be",
  storageBucket: "fir-prc-e67be.appspot.com",
  messagingSenderId: "875758586937",
  appId: "1:875758586937:web:570c60b43839afa52451e8",
  measurementId: "G-B4Y3EK42SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app