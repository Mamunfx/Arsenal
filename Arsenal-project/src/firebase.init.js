// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-x_oJ6nq3dHxmeylbMstjZOc8k_VfMEE",
  authDomain: "arsenal-auth-53462.firebaseapp.com",
  projectId: "arsenal-auth-53462",
  storageBucket: "arsenal-auth-53462.firebasestorage.app",
  messagingSenderId: "1012532360109",
  appId: "1:1012532360109:web:933ea8539a9ee664932724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);