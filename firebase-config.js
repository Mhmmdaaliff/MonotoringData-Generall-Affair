// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPqPODliAB1xTbRmFiSwW5F9rS7auGYtY",
  authDomain: "monotoringdata-generall-affair.firebaseapp.com",
  projectId: "monotoringdata-generall-affair",
  storageBucket: "monotoringdata-generall-affair.firebasestorage.app",
  messagingSenderId: "523130645116",
  appId: "1:523130645116:web:0c0d39669e4c4e9c5ab7f9",
  measurementId: "G-L3S5XP5E9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import fungsi yang dibutuhkan dari Firebase SDK
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Inisialisasi Firebase
const auth = getAuth(app);

// Menangkap event submit form
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Proses registrasi ke Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Berhasil mendaftar
            const user = userCredential.user;
            alert("Pendaftaran Berhasil! Selamat datang, " + email);
            window.location.href = "HomePage.html"; // Redirect ke halaman login/home
        })
        .catch((error) => {
            // Menangani error (password kurang panjang, email sudah ada, dll)
            const errorMessage = error.message;
            alert("Gagal mendaftar: " + errorMessage);
        });
});