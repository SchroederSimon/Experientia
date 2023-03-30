// import { useState } from 'react';
// import '../../pages/Login/Login.css'
// import { auth } from '../../services/firebase';
// import { useNavigate } from 'react-router-dom';

import { useState } from "react"


// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();

//   const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(email, password);
//       console.log(userCredential.user);
//       setIsLoggedIn(true); 
//       navigate('user/profile');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (isLoggedIn) {
//     console.log("asdas");
//   }

//   return (
//     <div className="login-container">
//       <img src="/logo.png" alt="" />
//       <h1>Login</h1>
//       <form className="login-form" onSubmit={handleFormSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           required
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />

//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   )
// }

// export default Login


import '../../pages/Login/Login.css'
import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { handleAuthStateChange } from "../../hooks/useAuth"
import { handleLogOut, handleSignInWithGoogle } from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  handleAuthStateChange();
  console.log(auth?.currentUser?.email)

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      navigate(`user/profile/${auth.currentUser?.uid}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register-container">
      <img src="/logo.png" alt="" />
      <h1>Login</h1>
      <form onSubmit={handleLogIn}>
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
          <a href="">Forgot your password?</a>
          <a href="">Don't have an account?</a>
        </div>
        <button type="submit">Log in</button>
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
export default Login