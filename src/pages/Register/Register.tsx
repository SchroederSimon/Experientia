import { auth, db } from "../../services/firebase"
import { createUserWithEmailAndPassword } from "@firebase/auth"
import { useState } from "react"
import '../../pages/Register/Register.css'
import { handleLogOut, handleSignInWithGoogle  } from "../../hooks/useAuth" 
import { addDoc, collection } from "firebase/firestore"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    // const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Create new document in "users" collection with user information
            const userDocRef = await addDoc(collection(db, "users"), {
                uid: userCredential.user?.uid,
                email: userCredential.user?.email,
                displayName: "",
                age: ""
                // Add any other user information you want to store here
            });
    
            console.log("User created successfully!");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="register-container">
            <img src="/logo.png" alt="" />
            <h1>Register</h1>
            <form  onSubmit={handleSignIn}>
                <div className="register-inputs">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>

            <form onSubmit={handleSignInWithGoogle}>
                <button type="submit">Sign in with Google</button>
            </form>

            <form onSubmit={handleLogOut}>
                <button type="submit">Log Out</button>
            </form>
        </div>
    )
}
export default Register;