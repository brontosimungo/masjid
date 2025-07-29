// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALrO3KrvU0qvsPSjj0UyXIQeonjVRBENE",
  authDomain: "dkm-masjid.firebaseapp.com",
  projectId: "dkm-masjid",
  storageBucket: "dkm-masjid.firebasestorage.app",
  messagingSenderId: "116735291808",
  appId: "1:116735291808:web:c1296d39e46318a514f4c5",
  measurementId: "G-812J977ZB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
