import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../services/firebase";


console.log(auth?.currentUser?.email)



export const handleLogOut = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}

export const handleSignInWithGoogle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.log(error)
    }
}