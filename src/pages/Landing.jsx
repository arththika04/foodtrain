import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>TRAIN MEAL</h1>
      <p>Food delivery to your train</p>

      <button onClick={() => navigate("/login")}>
        Order Now
      </button>
    </div>
  );
}

export default Landing;
