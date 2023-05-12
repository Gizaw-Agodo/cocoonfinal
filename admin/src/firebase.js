// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr19kdKBS1LlmMeTBH81VVMLheQ-qGaSc",
  authDomain: "cocoon-restaurant.firebaseapp.com",
  projectId: "cocoon-restaurant",
  storageBucket: "cocoon-restaurant.appspot.com",
  messagingSenderId: "754732137759",
  appId: "1:754732137759:web:99d6860def8c467a81c42a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app