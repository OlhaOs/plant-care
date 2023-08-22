import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbIuoUbJNO6RJR8I7XhokSFnml6oNm2ts",
  authDomain: "plantscare-19661.firebaseapp.com",
  projectId: "plantscare-19661",
  storageBucket: "plantscare-19661.appspot.com",
  messagingSenderId: "570704057455",
  appId: "1:570704057455:web:5cb096db5ac6cd8326299a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);