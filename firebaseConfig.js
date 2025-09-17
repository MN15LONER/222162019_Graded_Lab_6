import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0Xq_-4hW4DDR6TmoecSug0B7FvSO0y0E",
  authDomain: "to-do-app-22391.firebaseapp.com",
  projectId: "to-do-app-22391",
  storageBucket: "to-do-app-22391.firebasestorage.app",
  messagingSenderId: "553325077093",
  appId: "1:553325077093:web:b40058656fcc04ae7a5c8c",
  measurementId: "G-3CE4L78KTX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);