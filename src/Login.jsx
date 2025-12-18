export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>

        <div className="input-box">
          <input placeholder="Username" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>

        <div className="options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button>Login</button>
        <p className="register">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}
