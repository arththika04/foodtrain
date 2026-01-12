// Login.jsx
import "./Login.css";
import heroImg from "./food.jpg"; // use your image path

export default function Login() {
  return (
    <div className="login-wrapper">
      {/* left side - form */}
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p className="subtitle">Sign in with your username and password.</p>

        <form className="login-form">
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="link-btn">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="primary-btn">
            Login
          </button>

          <div className="divider">
            <span>or login with</span>
          </div>

          <div className="social-row">
            <button type="button" className="social-btn google">
              Login with Google
            </button>
            <button type="button" className="social-btn facebook">
              Login with Facebook
            </button>
          </div>

          <p className="register-text">
            Don&apos;t have an account? <a href="#">Register Now</a>
          </p>
        </form>
      </div>

      {/* right side - image */}
      <div className="login-right">
        <img src={heroImg} alt="Food" />
      </div>
    </div>
  );
}
