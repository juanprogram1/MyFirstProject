// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPsAWIj1R2N8Ux9FvpiReDITdHj1ej6Qg",
  authDomain: "origami-8bc18.firebaseapp.com",
  projectId: "origami-8bc18",
  storageBucket: "origami-8bc18.appspot.com",
  messagingSenderId: "532507855463",
  appId: "1:532507855463:web:cfdee7c7ed87644f5ca2c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



