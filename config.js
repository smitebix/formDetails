import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';


 const firebaseConfig = {
  apiKey: "AIzaSyC2UiNhd20V9lKTGXT4gl7uB2NTK-ZvyNw",
  authDomain: "myproject9090-444fc.firebaseapp.com",
  databaseURL: "https://myproject9090-444fc-default-rtdb.firebaseio.com",
  projectId: "myproject9090-444fc",
  storageBucket: "myproject9090-444fc.firebasestorage.app",
  messagingSenderId: "314456664907",
  appId: "1:314456664907:web:ea39627889c7e65f2f16ce",
  measurementId: "G-HPZG0CKD9E"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };