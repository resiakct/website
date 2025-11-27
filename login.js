import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBed9NDcrBeNMeel9paN5vKVW1SkWVXAlM",
  authDomain: "resiak-57e46.firebaseapp.com",
  projectId: "resiak-57e46",
  storageBucket: "resiak-57e46.firebasestorage.app",
  messagingSenderId: "100428387094",
  appId: "1:100428387094:web:c830ed25974000fbf33637"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login Successful!');
      console.log(userCredential.user);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});