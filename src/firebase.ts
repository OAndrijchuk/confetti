// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5WkM_8COC_c3tvxF9lEUS00zhjm-MQXo',
  authDomain: 'confetti-6f606.firebaseapp.com',
  projectId: 'confetti-6f606',
  storageBucket: 'confetti-6f606.appspot.com',
  messagingSenderId: '425995940052',
  appId: '1:425995940052:web:b39102f7e1f04026c4cb41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
