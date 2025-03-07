// Firebase SDK 라이브러리 가져오기
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {collection, addDoc} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {getDocs} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyC12_djPR8yq1QqzsoPb0cC58bV0eiK8",
    authDomain: "sparta-a2745.firebaseapp.com",
    projectId: "sparta-a2745",
    storageBucket: "sparta-a2745.firebasestorage.app",
    messagingSenderId: "1018036610105",
    appId: "1:1018036610105:web:7c0a249a3c5fa11baf99e8",
    measurementId: "G-7GVXP7BE9K"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };