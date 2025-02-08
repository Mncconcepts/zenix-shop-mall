// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9WXSMwa0D8mlMfF2rmRiZ6blixZvCIs",
  authDomain: "zenixstore-917d0.firebaseapp.com",
  projectId: "zenixstore-917d0",
  storageBucket: "zenixstore-917d0.firebasestorage.app",
  messagingSenderId: "509999333059",
  appId: "1:509999333059:web:f6bbd631d3458e7e8b2c76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}