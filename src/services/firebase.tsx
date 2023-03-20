import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "login-auth-bb896",
    storageBucket: "login-auth-bb896.appspot.com",
    messagingSenderId: "768862725908",
    appId: process.env.APP_ID
});


const auth = firebase.auth();

export { auth };