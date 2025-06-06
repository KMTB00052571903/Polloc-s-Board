// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW5bSj4fxMoHlmuYUwkfrBAzOdgGVK68k",
  authDomain: "polloc-s-board.firebaseapp.com",
  projectId: "polloc-s-board",
  storageBucket: "polloc-s-board.firebasestorage.app",
  messagingSenderId: "822276850649",
  appId: "1:822276850649:web:5689097cf5abf23da94fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta lo que usarás en otros archivos
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
