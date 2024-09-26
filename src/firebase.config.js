// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4Nh_Apbe03U1dh4FnPVDsMPQSKu59-g",
  authDomain: "online-job-portal-59a1d.firebaseapp.com",
  projectId: "online-job-portal-59a1d",
  storageBucket: "online-job-portal-59a1d.appspot.com",
  messagingSenderId: "142884858037",
  appId: "1:142884858037:web:ebea5dfde33bce5838f6fc",
  measurementId: "G-ZR4DRQV2KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {db};