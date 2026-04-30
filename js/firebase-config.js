import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkj2BX8yghGs5fiJvLG0zbAqAi114Qwjc",
  authDomain: "devverse-fcb17.firebaseapp.com",
  projectId: "devverse-fcb17",
  storageBucket: "devverse-fcb17.firebasestorage.app",
  messagingSenderId: "990338916097",
  appId: "1:990338916097:web:c6b40b9216d6f073cdc500",
  measurementId: "G-14B4C5JBQX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export default app;
