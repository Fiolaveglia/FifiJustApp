import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgGWM0B2Ngw2Z3qFEyIA5HskPAg2SFFy0",
    authDomain: "fifijustapp.firebaseapp.com",
    projectId: "fifijustapp",
    storageBucket: "fifijustapp.appspot.com",
    messagingSenderId: "994667207322",
    appId: "1:994667207322:web:122f72b21b61cf730b9d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);