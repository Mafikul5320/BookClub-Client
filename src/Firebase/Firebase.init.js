import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7bYUNr_qWq9HH_fV4HvDBszRRjZTiqM8",
  authDomain: "assignment-10-6f52b.firebaseapp.com",
  projectId: "assignment-10-6f52b",
  storageBucket: "assignment-10-6f52b.firebasestorage.app",
  messagingSenderId: "228681742149",
  appId: "1:228681742149:web:191a2d05b71f31d493f02c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);