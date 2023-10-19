// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL2_idc1bKsaJ-3wqUgDqkUIMpG9fzGKU",
  authDomain: "twitter-clone-project-ac9cd.firebaseapp.com",
  projectId: "twitter-clone-project-ac9cd",
  storageBucket: "twitter-clone-project-ac9cd.appspot.com",
  messagingSenderId: "974263269357",
  appId: "1:974263269357:web:e2a924c956e3c278ed59e4",
  measurementId: "G-P46KLB6W4Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app); 