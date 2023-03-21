import { useState } from 'react';
import '../../pages/Login/Login.css'
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // add state for login status

  const navigate = useNavigate();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      console.log(userCredential.user);
      setIsLoggedIn(true); // set login status to true on successful login
      navigate('user/profile');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoggedIn) {
    return <p>You are now logged in!</p>; // show a message when the user is logged in
  }

  return (
    <div className="login-container">
      <img src="/logo.png" alt="" />
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
