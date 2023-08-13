// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbIuoUbJNO6RJR8I7XhokSFnml6oNm2ts",
  authDomain: "plantscare-19661.firebaseapp.com",
  projectId: "plantscare-19661",
  storageBucket: "plantscare-19661.appspot.com",
  messagingSenderId: "570704057455",
  appId: "1:570704057455:web:5cb096db5ac6cd8326299a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed

export const db = getFirestore(app);