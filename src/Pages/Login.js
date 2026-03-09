import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Pages/Login.css";
import image from '../components/Image/Image1.jpeg';
import image2 from '../components/Image/image2.jpeg';
import image3 from '../components/Image/image3.jpeg';
import image4 from '../components/Image/image5.jpg';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "hema" && password === "23") {
      navigate("/birthday");
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div className="login-page">

      {/* Balloon Images */}
  <div className="balloons">

  <div className="photo-card p1">
    <span className="candle">🕯️</span>
    <img src={image} alt="Birthday memory 1" />
  </div>

  <div className="photo-card p2">
    <span className="candle">🕯️</span>
    <img src={image2} alt="Birthday memory 1" />
  </div>

  <div className="photo-card p3">
    <span className="candle">🕯️</span>
    <img src={image3} alt="Birthday memory 1"/>
  </div>

  <div className="photo-card p4">
    <span className="candle">🕯️</span>
    <img src={image4} alt="Birthday memory 1" />
  </div>

</div>

      <motion.div
        className="login-card"
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>🎂 Birthday Surprise 🎂</h1>
        <p>Enter to see your surprise 🎁</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Open Surprise 🎉
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;