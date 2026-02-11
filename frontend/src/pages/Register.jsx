import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStudent } from "../utils/auth";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create account (mock) and log in immediately
    loginStudent();
    navigate("/dashboard");
  };

  return (
    <div className="register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
