import { useState } from "react"


import '../../pages/Login/Login.css'
import { auth } from "../../services/firebase"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { handleAuthStateChange } from "../../hooks/useAuth"
import { handleLogOut, handleSignInWithGoogle } from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  handleAuthStateChange();
  console.log(auth?.currentUser?.email)
  const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user;
      navigate(`user/profile/${auth.currentUser?.uid ?? ''}`)
      console.log(user);
     })
     .catch((error) => {
      setError(true)
     })
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
        {error && <span>Wrong email or password!</span>}
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