import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/theme.css"; // Global theme
import "./signup.css"; // Component-specific styles

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "cashier",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add signup logic here
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card signup-form">
      <h2 className="form-title">Sign Up</h2>
      {error && <p className="form-message error">{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-field"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input-field"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <div className="role-selection">
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={formData.role === "admin"}
            onChange={handleChange}
          />
          Admin
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="cashier"
            checked={formData.role === "cashier"}
            onChange={handleChange}
          />
          Cashier
        </label>
      </div>
      <button type="submit" className="btn-primary">
        Sign Up
      </button>
      <p className="form-footer">
        I'm already a member.{" "}
        <Link to="/Login" className="link">
          <b>Login</b>
        </Link>
        <span style={{ margin: "0 8px" }}>|</span>
        <Link to="/" className="link">
          <b>Home</b>
        </Link>
      </p>
    </form>
  );
};

export default SignupPage;
