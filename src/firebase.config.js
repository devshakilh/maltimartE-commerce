
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCEMOUbMk2nyTrODRg621cRLloUsaYhx7k",
    authDomain: "maltimart-9f780.firebaseapp.com",
    projectId: "maltimart-9f780",
    storageBucket: "maltimart-9f780.appspot.com",
    messagingSenderId: "325407522234",
    appId: "1:325407522234:web:d70885a31b9b708d57b183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;