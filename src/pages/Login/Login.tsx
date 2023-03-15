import '../../pages/Login/Login.css'


function Login() {

  return (
    <div className="login-container">
      <img src="/logo.png" alt="" />
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
