// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth";            // Auth (필요시)
import { getStorage } from "firebase/storage";       // Storage (필요시)

const firebaseConfig = {
  apiKey: "AIzaSyBH3AvpxtOF7NQDH_fDOuAXSyEfw8r5kbU",
  authDomain: "lotto1081-2b3dc.firebaseapp.com",
  projectId: "lotto1081-2b3dc",
  storageBucket: "lotto1081-2b3dc.appspot.com",
  messagingSenderId: "785261698548",
  appId: "1:785261698548:web:84531550d2380c24f82da1",
  measurementId: "G-EMCRJS1KM2"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
