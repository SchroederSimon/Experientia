import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "login-auth-bb896",
    storageBucket: "login-auth-bb896.appspot.com",
    messagingSenderId: "768862725908",
    appId: process.env.APP_ID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();