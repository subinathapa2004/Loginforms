import React, { useState } from "react";
import "./App.css"; 

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); 

  
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login Form" : "Sign Up Form"}</h2>

      {!isLogin && (
        <input type="text" placeholder="Full Name" />
      )}

      <input type="text" placeholder="Username or Email" />
      <input type="password" placeholder="Password" />

      {!isLogin && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button>{isLogin ? "Login" : "Sign Up"}</button>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default AuthForm;
