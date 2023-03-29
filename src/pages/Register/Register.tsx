// import '../../pages/Register/Register.css'
// import React, { useState } from "react";
// import { auth, firestore } from '../../services/firebase';


// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const { user } = await auth.createUserWithEmailAndPassword(email, password);

//     if (user) {
//         await firestore.collection("users").doc(user.uid).set({
//             name,
//         });
//         console.log("User account created successfully!");
//     } else {
//         console.error("Error creating user account: User is null.");
//     }
// };

// return (
//     <div className="register-container">
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//             />

//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//             />

//             <button type="submit">Submit</button>
//         </form>
//     </div>
// );
import { auth, googleProvider } from "../../services/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { useState } from "react"
import '../../pages/Register/Register.css'
import { handleLogOut, handleSignInWithGoogle  } from "../../hooks/useAuth" 

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="register-container">
            <img src="/logo.png" alt="" />
            <h1>Login</h1>
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