import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Track whether user is in register mode
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const response = await axios.post("/api/users", {
          username,
          name,
          age,
          email,
          password,
        });
        console.log(response.message);
        setErrorMessage("");
        setUsername("");
        setName("");
        setAge("");
        setEmail("");
        setPassword("");

        window.location.href = "/";
      } else {
        const response = await axios.post("/api/auth", { email, password });
        console.log(response.message);
        localStorage.setItem("token", response.data.token);

        console.log("Login successful!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Incorrect password or username");
    }
  };

  const handleSwitchMode = () => {
    setIsRegistering(!isRegistering);
    setUsername("");
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div className="login-container">
      <h1>{isRegistering ? "Register" : "Login"}</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="login-form">
      {isRegistering && (
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        {isRegistering && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {isRegistering && (
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
      {isRegistering ? (
        <p>
          Already have an account?{" "}
          <button className="switch-link" onClick={handleSwitchMode}>
            Login instead
          </button>
        </p>
      ) : (
        <p>
          Need an account?{" "}
          <button className="switch-link" onClick={handleSwitchMode}>
            Register here
          </button>
        </p>
      )}
      <Link to="/" className="forgot-password">
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
