// js/firebase-config.js

/**
 * @fileoverview Modul ini berisi konfigurasi inisialisasi Firebase menggunakan gaya Compat (v8).
 * Catatan: Variabel 'db' harus dideklarasikan dengan 'var' atau diakses secara global agar terlihat di modul lain.
 */

const firebaseConfig = {
  apiKey: "AIzaSyBKSiYPC3SZr5aVgWsQdTdaCG4D3ylYHjM",
  authDomain: "aplikasi-input-nilai-mah-756ef.firebaseapp.com",
  projectId: "aplikasi-input-nilai-mah-756ef",
  storageBucket: "aplikasi-input-nilai-mah-756ef.firebasestorage.app",
  messagingSenderId: "104599728511",
  appId: "1:104599728511:web:7e9cfd7e63d45e9d116a4a",
  measurementId: "G-XXNPBQ4CPS"
};

// Inisialisasi Firebase (Gaya Compat)
firebase.initializeApp(firebaseConfig);

// Inisialisasi Cloud Firestore dan menjadikannya variabel global
var db = firebase.firestore();