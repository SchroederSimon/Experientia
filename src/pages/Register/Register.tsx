import '../../pages/Register/Register.css'
import React, { useState } from "react";
import { auth, firestore } from '../../services/firebase';

const Register: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        if (user) {
            await firestore.collection("users").doc(user.uid).set({
                name,
            });
            console.log("User account created successfully!");
        } else {
            console.error("Error creating user account: User is null.");
        }
    };
    

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;